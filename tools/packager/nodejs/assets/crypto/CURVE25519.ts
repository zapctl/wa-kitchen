import * as curve25519 from "curve25519-js";

import { RandomBytes } from "../utils";

namespace CURVE25519 {
	export interface KeyPair {
		publicKey: Uint8Array;
		privateKey: Uint8Array;
	}

	export function GenerateKeyPair(): KeyPair {
		const {
			public: publicKey,
			private: privateKey,
		} = curve25519.generateKeyPair(RandomBytes(32));

		return { publicKey, privateKey };
	}

	export function Dh(keyPair: KeyPair, publicKey: Uint8Array) {
		return curve25519.sharedKey(keyPair.privateKey, publicKey);
	}

	export function Sign(keyPair: KeyPair, buffer: Uint8Array) {
		return curve25519.sign(keyPair.privateKey, buffer, RandomBytes(64));
	}

	export function Verify(publicKey: Uint8Array, buffer: Uint8Array, signature: Uint8Array) {
		return curve25519.verify(publicKey, buffer, signature);
	}

	export const DhLen = 32;
}

export default CURVE25519;