import { BytesEquals, StringToBytes } from "../utils";

namespace SHA256 {
	const ALGORITHM = "SHA-256";

	export async function Hash(data: Uint8Array | string) {
		if (typeof data === "string") data = StringToBytes(data);

		const hashBuffer = await crypto.subtle.digest(ALGORITHM, data);

		return new Uint8Array(hashBuffer);
	}

	export async function HmacHash(key: Uint8Array, data: Uint8Array) {
		if (key.length === 0) key = new Uint8Array([0]);

		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "HMAC", hash: { name: ALGORITHM } },
			false,
			["sign"],
		);

		const hmacBuffer = await crypto.subtle.sign("HMAC", cryptoKey, data);
		return new Uint8Array(hmacBuffer);
	}

	export async function HmacVerify(key: Uint8Array, hmac: Uint8Array, data: Uint8Array) {
		const hash = await HmacHash(key, data);
		const calculatedHmac = hash.subarray(0, hmac.byteLength);

		return BytesEquals(hmac, calculatedHmac);
	}

	export async function Pbkdf2(key: Uint8Array, salt: Uint8Array) {
		if (key.length === 0) key = new Uint8Array([0]);

		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "PBKDF2", hash: { name: ALGORITHM } },
			false,
			["deriveBits"],
		);

		const derivedBits = await crypto.subtle.deriveBits(
			{
				name: 'PBKDF2',
				salt,
				iterations: 2 << 16,
				hash: 'SHA-256'
			},
			cryptoKey,
			32 * 8,
		);

		return new Uint8Array(derivedBits);
	}

	export interface HKDFOptions {
		salt?: Uint8Array,
		info?: Uint8Array,
	}

	export async function Hkdf(
		inputKeyMaterial: Uint8Array,
		length: number,
		options?: HKDFOptions,
	) {
		const info = options?.info || new Uint8Array();
		const salt = options?.salt || new Uint8Array();
		const steps = Math.ceil(length / HashLen);
		const extraBytesLength = info.byteLength + 1;

		const pseudoRandomKey = await HmacHash(salt, inputKeyMaterial);
		const output = new Uint8Array(steps * HashLen + extraBytesLength);

		let start = 0, end = 0;

		for (let i = 0; i < steps; i++) {
			output.set(info, end);
			output[end + info.byteLength] = i + 1;

			const hash = await HmacHash(
				pseudoRandomKey,
				output.subarray(start, end + extraBytesLength)
			);

			output.set(hash, end);

			start = end;
			end += HashLen;
		}

		return output.subarray(0, length);
	}

	export const HashLen = 32;
}

export default SHA256;