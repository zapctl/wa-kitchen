import { JID_AD, JID_PAIR } from "../../jid";
// @ts-ignore
import { SenderKeyDistributionMessage, SenderKeyMessage } from "../../proto/SignalWhisperTextProtocol_pb";

import { PROTOCOL_VERSION, PROTOCOL_VERSION_BYTE } from "./user";
import { CurveKeyToSignalKey, PadPKCS7, SignalKeyToCurveKey, UnPadPKCS7 } from "./utils";
import { BytesConcat, BytesToInt, RandomBytes, StringToBytes } from "../../utils";
import AES256CBC from "../AES256CBC";
import CURVE25519 from "../CURVE25519";
import SHA256 from "../SHA256";

export interface GroupSendChain {
	groupJid: JID_PAIR;
	id: number;
	counter: number;
	key: Uint8Array;
	signingKey: CURVE25519.KeyPair;
	participantJids: JID_AD[];
}

export interface GroupReceiveChain {
	groupJid: JID_PAIR;
	participantJid: JID_AD;
	id: number;
	counter: number;
	key: Uint8Array;
	signingPublicKey: Uint8Array;
}

export interface GroupSkippedMessageKey {
	chainId: number;
	groupJid: JID_PAIR;
	participantJid: JID_AD;
	counter: number;
	key: Uint8Array;
}

export type GroupReceiveChainGetter = (
	groupJid: JID_PAIR,
	participantJid: JID_AD,
	chainId: number,
) => Promise<GroupReceiveChain | undefined>;

export type GroupSkippedMessageKeyGetter = (
	groupJid: JID_PAIR,
	participantJid: JID_AD,
	chainId: number,
	counter: number
) => Promise<GroupSkippedMessageKey | undefined>;

export function CreateGroupSendChain(groupJid: JID_PAIR) {
	const chainId = BytesToInt(RandomBytes(4));
	const chainKey = RandomBytes(32);
	const signingKey = CURVE25519.GenerateKeyPair();

	const session: GroupSendChain = {
		groupJid,
		id: chainId,
		key: chainKey,
		counter: 0,
		signingKey,
		participantJids: [],
	}

	return session;
}

export function EncodeGroupKeyDistributionMessage(chain: GroupSendChain) {
	const message = new SenderKeyDistributionMessage({
		id: chain.id,
		chainKey: chain.key,
		iteration: chain.counter,
		signingKey: CurveKeyToSignalKey(chain.signingKey.publicKey),
	});

	const encodedMessage = BytesConcat([
		PROTOCOL_VERSION_BYTE,
		message.toBinary()
	]);

	return encodedMessage;
}

export function DecodeGroupKeyDistributionMessage(
	groupJid: JID_PAIR,
	participantJid: JID_AD,
	buffer: Uint8Array,
) {
	const protocolVersion = (buffer[0] & 0xFF) >> 4;
	const messageBytes = buffer.subarray(1);

	if (protocolVersion !== 3) throw new Error("incompatible protocol version");

	const message = SenderKeyDistributionMessage.fromBinary(messageBytes);
	if (!message.id) throw new Error("missing chain id");
	if (message.iteration === undefined) throw new Error("missing chain counter");
	if (!message.chainKey) throw new Error("missing chain key");
	if (!message.signingKey) throw new Error("missing chain signing key");

	const receiveChain: GroupReceiveChain = {
		groupJid,
		participantJid,
		id: message.id,
		key: message.chainKey,
		counter: message.iteration,
		signingPublicKey: message.signingKey,
	}

	return receiveChain;
}

export async function EncryptGroupMessage(chain: GroupSendChain, buffer: Uint8Array) {
	const messageKey = await SHA256.HmacHash(chain.key, new Uint8Array([0x01]));
	const chainKey = await SHA256.HmacHash(chain.key, new Uint8Array([0x02]));

	chain.key = chainKey;
	chain.counter++;

	const expandedKeys = await SHA256.Hkdf(messageKey, 48, {
		salt: new Uint8Array(32),
		info: StringToBytes("WhisperGroup"),
	});

	const cipher = {
		key: expandedKeys.subarray(16, 48),
		iv: expandedKeys.subarray(0, 16),
	}

	const cipherText = await AES256CBC.Encrypt(
		cipher.key,
		PadPKCS7(buffer),
		cipher.iv,
	);

	const message = new SenderKeyMessage({
		id: chain.id,
		iteration: chain.counter - 1,
		ciphertext: cipherText.subarray(16),
	});

	const encodedMessage = BytesConcat([
		PROTOCOL_VERSION_BYTE,
		message.toBinary(),
	]);

	const encodedSignedMessage = BytesConcat([
		encodedMessage,
		CURVE25519.Sign(chain.signingKey, encodedMessage),
	]);

	return encodedSignedMessage;
}

export async function DecryptGroupMessage(
	groupJid: JID_PAIR,
	senderJid: JID_AD,
	getReceiveChain: GroupReceiveChainGetter,
	getSkippedMessageKey: GroupSkippedMessageKeyGetter,
	buffer: Uint8Array,
) {
	const encodedMessage = buffer.subarray(0, -64);
	const encodedMessageSignature = buffer.subarray(-64);

	const protocolVersion = (encodedMessage[0] & 0xFF) >> 4;
	const messageBytes = encodedMessage.subarray(1);

	if (protocolVersion !== PROTOCOL_VERSION) {
		throw new Error("incompatible protocol version");
	}

	const message = SenderKeyMessage.fromBinary(messageBytes);
	if (!message.id) throw new Error("missing chain id");
	if (message.iteration === undefined) throw new Error("missing chain counter");
	if (!message.ciphertext) throw new Error("missing cipher text");

	const receiveChain = await getReceiveChain(groupJid, senderJid, message.id);
	if (!receiveChain) throw new Error("session does not have this message chain");

	const signatureMatch = CURVE25519.Verify(
		SignalKeyToCurveKey(receiveChain.signingPublicKey),
		encodedMessage,
		encodedMessageSignature,
	);

	if (!signatureMatch) throw new Error("signature verification failed");

	const messageKeyResult = await calculateNextMessageKeys(
		receiveChain,
		getSkippedMessageKey,
		message.iteration + 1,
	);

	if (!messageKeyResult) throw new Error("cannot get key for this message");
	const { messageKey, isSkippedMessageKey, skippedMessageKeys } = messageKeyResult;

	const expandedKeys = await SHA256.Hkdf(messageKey.key, 48, {
		salt: new Uint8Array(32),
		info: StringToBytes("WhisperGroup"),
	});

	const cipher = {
		key: expandedKeys.subarray(16, 48),
		iv: expandedKeys.subarray(0, 16),
	}

	const plainText = await AES256CBC.Decrypt(
		cipher.key,
		BytesConcat([cipher.iv, message.ciphertext]),
	).then(UnPadPKCS7);

	return {
		plainText,
		receiveChain,
		skippedMessageKey: isSkippedMessageKey ? messageKey : undefined,
		newSkippedMessageKeys: skippedMessageKeys,
	};
}

async function calculateNextMessageKeys(
	chain: GroupReceiveChain,
	getSkippedMessageKey: GroupSkippedMessageKeyGetter,
	remoteCounter: number,
) {
	const iterationCount = remoteCounter - chain.counter;
	const skippedMessageKeys: GroupSkippedMessageKey[] = [];

	for (let i = 0; i < iterationCount; i++) {
		const messageKey = await SHA256.HmacHash(chain.key, new Uint8Array([0x01]));
		chain.key = await SHA256.HmacHash(chain.key, new Uint8Array([0x02]));

		skippedMessageKeys.push({
			chainId: chain.id,
			groupJid: chain.groupJid,
			participantJid: chain.participantJid,
			counter: ++chain.counter,
			key: messageKey,
		});
	}

	const messageKeyIndex = skippedMessageKeys.findIndex(skipped => {
		return skipped.counter === remoteCounter;
	});

	if (messageKeyIndex < 0) {
		const messageKey = await getSkippedMessageKey(
			chain.groupJid,
			chain.participantJid,
			chain.id,
			remoteCounter
		);
		if (!messageKey) return;

		return {
			messageKey,
			isSkippedMessageKey: true,
			skippedMessageKeys,
		};
	};

	const messageKey = skippedMessageKeys[messageKeyIndex];
	skippedMessageKeys.splice(messageKeyIndex, 1);

	return {
		messageKey,
		isSkippedMessageKey: false,
		skippedMessageKeys,
	};
}