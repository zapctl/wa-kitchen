import { webcrypto } from "node:crypto";
import { BytesConcat, RandomBytes, StringToBytes } from "../utils";
import SHA256 from "./SHA256";

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

	export class DecryptStream extends TransformStream<Uint8Array, Uint8Array> {
		#hmac?: Uint8Array;

		constructor(key: Uint8Array, initialIv: Uint8Array) {
			let cryptoKey: webcrypto.CryptoKey;
			let iv: Uint8Array<ArrayBuffer> = new Uint8Array(initialIv);
			let buffer: Uint8Array = new Uint8Array();

			super({
				start: async () => {
					cryptoKey = await crypto.subtle.importKey(
						"raw",
						key,
						{ name: "AES-CBC", length: 256 },
						false,
						["decrypt", "encrypt"],
					);
				},

				transform: async (chunk, controller) => {
					buffer = BytesConcat([buffer, chunk]);

					const CHUNK_SIZE = buffer.length - (buffer.length % 16);
					if (CHUNK_SIZE === 0) return;

					const block = buffer.subarray(0, CHUNK_SIZE);
					const blockIv = block.slice(-16);

					const padding = await crypto.subtle.encrypt({
						name: "AES-CBC",
						iv: blockIv.buffer,
					}, cryptoKey, new Uint8Array());

					const decrypted = await crypto.subtle.decrypt(
						{
							name: "AES-CBC",
							length: 128,
							iv: iv.buffer,
						},
						cryptoKey,
						BytesConcat([block, new Uint8Array(padding)]),
					)

					iv = blockIv;
					buffer = buffer.subarray(CHUNK_SIZE);

					controller.enqueue(new Uint8Array(decrypted));
				},

				flush: async (controller) => {
					if (buffer.length > 10) {
						const decrypted = await crypto.subtle.decrypt(
							{
								name: "AES-CBC",
								iv: new Uint8Array(iv).buffer,
							},
							cryptoKey,
							buffer.subarray(0, -10),
						);

						controller.enqueue(new Uint8Array(decrypted));
					}

					this.#hmac = buffer.slice(-10);
				},
			});
		}

		get hmac() {
			return this.#hmac;
		}
	}
}

export default AES256CBC;