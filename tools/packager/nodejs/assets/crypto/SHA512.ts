import { BytesEquals, StringToBytes } from "../utils";

namespace SHA512 {
	const ALGORITHM = "SHA-512";
	export const HashLen = 64;

	export async function Hash(data: Uint8Array | string) {
		if (typeof data === "string") data = StringToBytes(data);

		const hashBuffer = await crypto.subtle.digest(ALGORITHM, data);

		return new Uint8Array(hashBuffer);
	}

	export async function HmacHash(key: Uint8Array, data: Uint8Array) {
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
}

export default SHA512;