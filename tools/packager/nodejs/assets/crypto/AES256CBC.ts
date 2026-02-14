import { BytesConcat, RandomBytes, StringToBytes } from "../utils";

namespace AES256CBC {
	export async function Encrypt(key: Uint8Array, plainText: string | Uint8Array, iv?: Uint8Array) {
		iv = iv || RandomBytes(16);
		if (typeof plainText === "string") plainText = StringToBytes(plainText);

		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "AES-CBC", length: 256 },
			false,
			["encrypt"],
		);

		const cipherTextBuffer = await crypto.subtle.encrypt(
			{
				name: "AES-CBC",
				iv: new Uint8Array(iv).buffer,
				tagLength: 128,
			},
			cryptoKey,
			plainText
		);

		return BytesConcat([iv, new Uint8Array(cipherTextBuffer)]);
	}

	export async function Decrypt(key: Uint8Array, cipherText: Uint8Array) {
		const iv = cipherText.subarray(0, 16);
		cipherText = cipherText.subarray(16);

		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "AES-CBC", length: 256 },
			false,
			["decrypt"],
		);

		const plainTextBuffer = await crypto.subtle.decrypt(
			{
				name: "AES-CBC",
				iv: new Uint8Array(iv).buffer,
				tagLength: 128,
			},
			cryptoKey,
			cipherText
		);

		return new Uint8Array(plainTextBuffer);
	}
}

export default AES256CBC;