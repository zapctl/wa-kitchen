import { BytesConcat } from "../../utils";

export const CURVE_KEY_TYPE = 0x05;

export function CurveKeyToSignalKey(curveKey: Uint8Array) {
	if (curveKey.byteLength === 32) return BytesConcat([CURVE_KEY_TYPE, curveKey]);
	return curveKey;
}

export function SignalKeyToCurveKey(signalKey: Uint8Array) {
	if (signalKey.byteLength === 33) return signalKey.subarray(-32);
	return signalKey;
}

export function UnPadPKCS7(data: Uint8Array) {
	const dataLength = data.length;
	const paddingLength = data.at(-1) || 0;

	if (paddingLength > dataLength) throw new Error("padding overflow");

	return data.subarray(0, dataLength - paddingLength);
}

export function PadPKCS7(data: Uint8Array) {
	const randomBytes = new Uint32Array(1);
	crypto.getRandomValues(randomBytes);

	const pad = (randomBytes[0] & 0xf) | 0xf;

	return new Uint8Array([
		...data,
		...new Uint8Array(pad).fill(pad),
	]);
}