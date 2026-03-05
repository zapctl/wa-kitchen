import { JID_AD } from "../../jid";
// @ts-ignore
import { PreKeySignalMessage, SignalMessage } from "../../proto/SignalWhisperTextProtocol_pb";

import {
	BytesConcat,
	BytesEquals,
	BytesToBase64,
	StringToBytes,
} from "../../utils";
import AES256CBC from "../AES256CBC";
import CURVE25519 from "../CURVE25519";
import SHA256 from "../SHA256";
import { CurveKeyToSignalKey, PadPKCS7, PROTOCOL_VERSION, PROTOCOL_VERSION_BYTE, SignalKeyToCurveKey, UnPadPKCS7 } from "./utils";

namespace UserSignal {
	export interface PreKey {
		keyId: number;
		keyPair: CURVE25519.KeyPair;
	}

	export interface SignedPreKey extends PreKey {
		signature: Uint8Array;
	}

	export interface PublicPreKey {
		keyId: number;
		publicKey: Uint8Array;
	}

	export interface PublicSignedPreKey extends PublicPreKey {
		signature: Uint8Array;
	}

	export enum MessageType {
		Signal = "msg",
		PreKeySignal = "pkmsg",
	}

	export interface SessionBundle {
		jid: JID_AD;
		identityKey: Uint8Array;
		registrationId: number;
		preKey?: PublicPreKey;
		signedPreKey: PublicSignedPreKey;
	}

	export interface Session {
		jid: JID_AD,
		registrationId: number,
		identityKey: Uint8Array,
		rootKey: Uint8Array,
		ephemeralKeyPair: CURVE25519.KeyPair;
		previousCounter: number;
		sendChain: SendChain,
		receiveChain: ReceiveChain,
		pendingPreKey?: {
			keyId: number;
			signedKeyId: number;
			baseKey: Uint8Array,
		},
	}

	export interface SendChain {
		messageCounter: number;
		messageKey: Uint8Array;
	}

	export interface ReceiveChain {
		messageCounter: number;
		messageKey: Uint8Array;
		ratchetKey: Uint8Array;
		baseKey: Uint8Array;
	}

	export interface SkippedMessageKey {
		userJid: JID_AD;
		chainId: string;
		counter: number;
		key: Uint8Array;
	}

	export type SkippedMessageKeyGetter = (jid: JID_AD, chainId: string, counter: number) =>
		Promise<SkippedMessageKey | undefined>;

	export type PreKeyGetter = (keyId: number) =>
		Promise<PreKey | undefined>;

	export async function ProcessSessionBundle(
		localIdentityKeyPair: CURVE25519.KeyPair,
		bundle: SessionBundle,
	) {
		const localEphemeralKeyPair = CURVE25519.GenerateKeyPair();

		const rootKeyMaterial = BytesConcat([
			new Uint8Array(32).fill(0xFF),
			CURVE25519.Dh(localIdentityKeyPair, bundle.signedPreKey.publicKey),
			CURVE25519.Dh(localEphemeralKeyPair, bundle.identityKey),
			CURVE25519.Dh(localEphemeralKeyPair, bundle.signedPreKey.publicKey),
			bundle.preKey ?
				CURVE25519.Dh(localEphemeralKeyPair, bundle.preKey.publicKey) :
				new Uint8Array(),
		]);

		const rootKey = await SHA256.Hkdf(rootKeyMaterial, 32, {
			salt: new Uint8Array(32),
			info: StringToBytes("WhisperText"),
		});

		const session: Session = {
			jid: bundle.jid,
			registrationId: bundle.registrationId,
			identityKey: bundle.identityKey,
			rootKey,
			ephemeralKeyPair: localEphemeralKeyPair,
			previousCounter: 0,
			pendingPreKey: bundle.preKey ? {
				keyId: bundle.preKey.keyId,
				signedKeyId: bundle.signedPreKey.keyId,
				baseKey: localEphemeralKeyPair.publicKey,
			} : undefined,
			sendChain: {
				messageCounter: -1,
				messageKey: new Uint8Array(),
			},
			receiveChain: {
				messageCounter: -1,
				messageKey: new Uint8Array(),
				ratchetKey: new Uint8Array(),
				baseKey: new Uint8Array(),
			},
		}

		const ratchetSendKeys = await calculateNextRatchetKeys(
			session.rootKey,
			session.ephemeralKeyPair,
			bundle.signedPreKey.publicKey,
		);

		session.rootKey = ratchetSendKeys.rootKey;
		session.sendChain.messageKey = ratchetSendKeys.chainMessageKey;

		return session;
	}

	export async function EncryptMessage(
		localRegistrationId: number,
		localIdentityKeyPair: CURVE25519.KeyPair,
		session: Session,
		plainText: Uint8Array,
	) {
		const messageKey = await SHA256.HmacHash(session.sendChain.messageKey, new Uint8Array([0x01]));
		const chainKey = await SHA256.HmacHash(session.sendChain.messageKey, new Uint8Array([0x02]));

		session.sendChain.messageKey = chainKey;
		session.sendChain.messageCounter++;

		const expandedKeys = await SHA256.Hkdf(messageKey, 80, {
			salt: new Uint8Array(32),
			info: StringToBytes("WhisperMessageKeys"),
		});

		const cipher = {
			key: expandedKeys.subarray(0, 32),
			macKey: expandedKeys.subarray(32, 64),
			iv: expandedKeys.subarray(64, 80),
		}

		const cipherText = await AES256CBC.Encrypt(
			cipher.key,
			PadPKCS7(plainText),
			cipher.iv,
		);

		const message = new SignalMessage({
			counter: session.sendChain.messageCounter,
			previousCounter: session.previousCounter,
			ratchetKey: CurveKeyToSignalKey(session.ephemeralKeyPair.publicKey),
			ciphertext: cipherText.subarray(16),
		});

		const encodedMessage = BytesConcat([
			PROTOCOL_VERSION_BYTE,
			message.toBinary()
		]);

		const messageMac = await SHA256.HmacHash(cipher.macKey, BytesConcat([
			CurveKeyToSignalKey(localIdentityKeyPair.publicKey),
			CurveKeyToSignalKey(session.identityKey),
			encodedMessage,
		]));

		const encodedMessageWithMAC = BytesConcat([
			encodedMessage,
			messageMac.subarray(0, 8),
		]);

		if (!session.pendingPreKey) return {
			type: MessageType.Signal,
			buffer: encodedMessageWithMAC,
		};

		const preKeyMessage = new PreKeySignalMessage({
			registrationId: localRegistrationId,
			preKeyId: session.pendingPreKey.keyId,
			signedPreKeyId: session.pendingPreKey.signedKeyId,
			identityKey: CurveKeyToSignalKey(localIdentityKeyPair.publicKey),
			baseKey: CurveKeyToSignalKey(session.pendingPreKey.baseKey),
			message: encodedMessageWithMAC,
		});

		const encodedPreKeyMessage = BytesConcat([
			PROTOCOL_VERSION_BYTE,
			preKeyMessage.toBinary(),
		]);

		return {
			type: MessageType.PreKeySignal,
			buffer: encodedPreKeyMessage,
		};
	}

	export async function DecryptPreKeyMessage(
		remoteJid: JID_AD,
		localIdentityKeyPair: CURVE25519.KeyPair,
		localSignedPreKey: SignedPreKey,
		session: Session | undefined,
		getPreKey: PreKeyGetter,
		getSkippedMessageKey: SkippedMessageKeyGetter,
		buffer: Uint8Array,
	) {
		const protocolVersion = (buffer[0] & 0xFF) >> 4;
		const messageBytes = buffer.subarray(1);

		if (protocolVersion !== PROTOCOL_VERSION) {
			throw new Error("incompatible protocol version");
		}

		const message = PreKeySignalMessage.fromBinary(messageBytes);
		if (!message.baseKey) throw new Error("missing base key");
		if (!message.message) throw new Error("missing message content");

		if (localSignedPreKey.keyId !== message.signedPreKeyId) {
			throw new Error("mismatch signed prekey id");
		}

		let preKey: PreKey | undefined;
		const baseKey = SignalKeyToCurveKey(message.baseKey);

		if (!session || !BytesEquals(session.receiveChain.baseKey, baseKey)) {
			if (!message.registrationId) throw new Error("missing registration id");
			if (!message.identityKey) throw new Error("missing identity key");
			if (!message.signedPreKeyId) throw new Error("missing signed prekey id");

			if (message.preKeyId) preKey = await getPreKey(message.preKeyId);

			const rootKeyMaterial = BytesConcat([
				new Uint8Array(32).fill(0xFF),
				CURVE25519.Dh(localSignedPreKey.keyPair, SignalKeyToCurveKey(message.identityKey)),
				CURVE25519.Dh(localIdentityKeyPair, baseKey),
				CURVE25519.Dh(localSignedPreKey.keyPair, baseKey),
				preKey ? CURVE25519.Dh(preKey.keyPair, baseKey) : new Uint8Array(),
			]);

			const rootKey = await SHA256.Hkdf(rootKeyMaterial, 32, {
				salt: new Uint8Array(32),
				info: StringToBytes("WhisperText"),
			});

			session = {
				jid: remoteJid,
				registrationId: message.registrationId,
				identityKey: SignalKeyToCurveKey(message.identityKey),
				rootKey,
				ephemeralKeyPair: localSignedPreKey.keyPair,
				previousCounter: 0,
				sendChain: {
					messageCounter: -1,
					messageKey: new Uint8Array(),
				},
				receiveChain: {
					messageCounter: -1,
					baseKey,
					messageKey: new Uint8Array(),
					ratchetKey: new Uint8Array(),
				},
			}
		}

		const result = await DecryptMessage(
			localIdentityKeyPair,
			session,
			getSkippedMessageKey,
			message.message,
		);

		delete session.pendingPreKey;
		session.receiveChain.baseKey = new Uint8Array();

		return {
			...result,
			session,
			preKeyId: preKey?.keyId,
		}
	}

	export async function DecryptMessage(
		localIdentityKeyPair: CURVE25519.KeyPair,
		session: Session,
		getSkippedMessageKey: SkippedMessageKeyGetter,
		buffer: Uint8Array,
	) {
		const encodedMessage = buffer.subarray(0, -8);
		const encodedMessageMac = buffer.subarray(-8);

		const protocolVersion = (encodedMessage[0] & 0xFF) >> 4;
		const messageBytes = encodedMessage.subarray(1);

		if (protocolVersion !== PROTOCOL_VERSION) {
			throw new Error("incompatible protocol version");
		}

		const message = SignalMessage.fromBinary(messageBytes);
		if (!message.ratchetKey) throw new Error("missing ratchet key");
		if (message.counter === undefined) throw new Error("missing counter");
		if (!message.ciphertext) throw new Error("missing cipher text");

		const remoteRatchetKey = SignalKeyToCurveKey(message.ratchetKey);
		const skippedMessageKeys: SkippedMessageKey[] = [];

		if (!BytesEquals(session.receiveChain.ratchetKey, remoteRatchetKey)) {
			if (
				message.previousCounter !== undefined &&
				session.receiveChain.ratchetKey.byteLength > 0
			) {
				await calculateChainMessageKeys(
					session,
					message.previousCounter
				).then(messageKeys => {
					skippedMessageKeys.push(...messageKeys);
				});
			}

			const ratchetReceiveKeys = await calculateNextRatchetKeys(
				session.rootKey,
				session.ephemeralKeyPair,
				message.ratchetKey,
			);

			session.rootKey = ratchetReceiveKeys.rootKey;

			if (session.receiveChain.ratchetKey.byteLength > 0) {
				session.previousCounter = session.sendChain.messageCounter;
			}

			session.receiveChain.messageKey = ratchetReceiveKeys.chainMessageKey;
			session.receiveChain.ratchetKey = remoteRatchetKey;
			session.receiveChain.messageCounter = -1;

			session.ephemeralKeyPair = CURVE25519.GenerateKeyPair();

			const ratchetSendKeys = await calculateNextRatchetKeys(
				session.rootKey,
				session.ephemeralKeyPair,
				message.ratchetKey,
			);

			session.rootKey = ratchetSendKeys.rootKey;
			session.sendChain.messageKey = ratchetSendKeys.chainMessageKey;
			session.sendChain.messageCounter = -1;
		}

		await calculateChainMessageKeys(
			session,
			message.counter,
		).then(messageKeys => {
			skippedMessageKeys.push(...messageKeys);
		});

		const messageKeyResult = await getChainMessageKey(
			session.jid,
			getSkippedMessageKey,
			skippedMessageKeys,
			message.ratchetKey,
			message.counter,
		);

		if (!messageKeyResult) {
			throw new Error("cannot get key for this message");
		}

		const { isSkippedMessageKey, messageKey } = messageKeyResult;

		const expandedKeys = await SHA256.Hkdf(messageKey.key, 80, {
			salt: new Uint8Array(32),
			info: StringToBytes("WhisperMessageKeys"),
		});

		const cipher = {
			key: expandedKeys.subarray(0, 32),
			macKey: expandedKeys.subarray(32, 64),
			iv: expandedKeys.subarray(64, 80),
		}

		const hmacMatch = await SHA256.HmacVerify(
			cipher.macKey,
			encodedMessageMac,
			BytesConcat([
				CurveKeyToSignalKey(session.identityKey),
				CurveKeyToSignalKey(localIdentityKeyPair.publicKey),
				encodedMessage,
			]),
		);

		if (!hmacMatch) {
			throw new Error("HMAC verification failed");
		}

		const plainText = await AES256CBC.Decrypt(
			cipher.key,
			BytesConcat([
				cipher.iv,
				message.ciphertext,
			]),
		).then(UnPadPKCS7);

		return {
			plainText,
			skippedMessageKey: isSkippedMessageKey ? messageKey : undefined,
			newSkippedMessageKeys: skippedMessageKeys,
		};
	}

	async function calculateNextRatchetKeys(
		rootKey: Uint8Array,
		ephemeralKeyPair: CURVE25519.KeyPair,
		remotePublicKey: Uint8Array,
	) {
		const ratchetMaterial = CURVE25519.Dh(
			ephemeralKeyPair,
			SignalKeyToCurveKey(remotePublicKey),
		);

		const expandedKeys = await SHA256.Hkdf(ratchetMaterial, 64, {
			salt: rootKey,
			info: StringToBytes("WhisperRatchet"),
		});

		return {
			rootKey: expandedKeys.subarray(0, 32),
			chainMessageKey: expandedKeys.subarray(32, 64),
		}
	}

	async function calculateChainMessageKeys(
		session: Session,
		remoteCounter: number,
	) {
		const receiveChain = session.receiveChain;
		const iterationCount = remoteCounter - receiveChain.messageCounter;
		if (iterationCount <= 0) return [];

		const skippedMessageKeys: SkippedMessageKey[] = [];
		const chainId = BytesToBase64(receiveChain.ratchetKey.subarray(0, 8));

		for (let i = 0; i < iterationCount; i++) {
			const messageKey = await SHA256.HmacHash(receiveChain.messageKey, new Uint8Array([0x01]));
			receiveChain.messageKey = await SHA256.HmacHash(receiveChain.messageKey, new Uint8Array([0x02]));

			skippedMessageKeys.push({
				userJid: session.jid,
				chainId,
				counter: ++receiveChain.messageCounter,
				key: messageKey,
			});
		}

		return skippedMessageKeys;
	}

	async function getChainMessageKey(
		senderJid: JID_AD,
		getSkippedMessageKey: SkippedMessageKeyGetter,
		skippedMessageKeys: SkippedMessageKey[],
		remoteEphemeralKey: Uint8Array,
		remoteCounter: number,
	) {
		const chainId = BytesToBase64(SignalKeyToCurveKey(remoteEphemeralKey).subarray(0, 8));

		const messageKeyIndex = skippedMessageKeys.findIndex(msgKey => (
			msgKey.counter === remoteCounter &&
			msgKey.chainId === chainId
		));

		if (messageKeyIndex < 0) {
			const messageKey = await getSkippedMessageKey(
				senderJid,
				chainId,
				remoteCounter,
			);

			if (!messageKey) return;
			return { isSkippedMessageKey: true, messageKey };
		}

		const messageKey = skippedMessageKeys[messageKeyIndex];
		skippedMessageKeys.splice(messageKeyIndex, 1);

		return { isSkippedMessageKey: false, messageKey };
	}
}

export default UserSignal;