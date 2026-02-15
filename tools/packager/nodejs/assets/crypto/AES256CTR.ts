import { StringToBytes } from "../utils";

namespace AES256CTR {
	export async function Encrypt(key: Uint8Array, iv: Uint8Array, plainText: string | Uint8Array) {
		if (typeof plainText === "string") plainText = StringToBytes(plainText);

		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "AES-CTR", length: 256 },
			false,
			["encrypt"],
		);

		const cipherTextBuffer = await crypto.subtle.encrypt(
			{
				name: "AES-CTR",
				counter: new Uint8Array(iv),
				length: 128
			},
			cryptoKey,
			plainText
		);

		return new Uint8Array(cipherTextBuffer);
	}

	export async function Decrypt(key: Uint8Array, iv: Uint8Array, cipherText: Uint8Array) {
		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "AES-CTR", length: 256 },
			false,
			["decrypt"],
		);

		const plainTextBuffer = await crypto.subtle.decrypt(
			{
				name: "AES-CTR",
				counter: new Uint8Array(iv),
				length: 128
			},
			cryptoKey,
			cipherText
		);

		return new Uint8Array(plainTextBuffer);
	}
}

export default AES256CTR;