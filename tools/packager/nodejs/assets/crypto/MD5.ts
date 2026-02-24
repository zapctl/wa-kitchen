import { createHash } from "node:crypto";

namespace MD5 {
	const ALGORITHM = "md5";
	export const HashLen = 16;

	export function Hash(data: Uint8Array | string) {
		const hash = createHash(ALGORITHM).update(data);

		return new Uint8Array(hash.digest());
	}
}

export default MD5;