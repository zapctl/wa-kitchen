import { StringToBytes } from "../utils";

namespace AES256GCM {
	export async function Encrypt(key: Uint8Array, iv: Uint8Array, plainText: string | Uint8Array, ad?: Uint8Array) {
		if (typeof plainText === "string") plainText = StringToBytes(plainText);

		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "AES-GCM", length: 256 },
			false,
			["encrypt"],
		);

		const cipherTextBuffer = await crypto.subtle.encrypt(
			{
				name: "AES-GCM",
				iv: new Uint8Array(iv).buffer,
				additionalData: new Uint8Array(ad || []).buffer,
				tagLength: 128,
			},
			cryptoKey,
			plainText
		);

		return new Uint8Array(cipherTextBuffer);
	}

	export async function Decrypt(key: Uint8Array, iv: Uint8Array, cipherText: Uint8Array, ad?: Uint8Array) {
		const cryptoKey = await crypto.subtle.importKey(
			"raw",
			key,
			{ name: "AES-GCM", length: 256 },
			false,
			["decrypt"],
		);

		const plainTextBuffer = await crypto.subtle.decrypt(
			{
				name: "AES-GCM",
				iv: new Uint8Array(iv).buffer,
				additionalData: new Uint8Array(ad || []).buffer,
				tagLength: 128,
			},
			cryptoKey,
			cipherText
		);

		return new Uint8Array(plainTextBuffer);
	}
}

export default AES256GCM;