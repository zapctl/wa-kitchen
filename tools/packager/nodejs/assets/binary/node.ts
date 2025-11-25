import { decodeFromBinary } from "./decode";
import { encodeToBinary, encodeToString } from "./encode";
import { JID } from "../jid";
import { BytesToInt, BytesToString, StringToBytes } from "../utils";

export type XMLNodeTagName = "iq" | "message" | "presence" | (string & { _?: never });
export type XMLNodeAttributeValue = string | JID | undefined;
export type XMLNodeAttributes = Record<string, XMLNodeAttributeValue>;
export type XMLNodeChildren = XMLNode[] | string | Uint8Array;

export interface XMLNodeObject {
	tagName: XMLNodeTagName;
	attributes?: XMLNodeAttributes;
	children?: (XMLNodeObject | XMLNode)[] | string | Uint8Array;
}

export class XMLNode {
	tagName: XMLNodeTagName;
	attributes: XMLNodeAttributes;
	children: XMLNodeChildren;

	constructor(init?: XMLNodeTagName) {
		this.tagName = String(init || "");
		this.attributes = {};
		this.children = [];
	}

	static fromObject(obj: XMLNodeObject): XMLNode {
		const node = new XMLNode();

		if (Array.isArray(obj.children)) {
			node.children = [];

			for (const child of obj.children) {
				if (typeof child === "object" && !(child instanceof XMLNode)) {
					node.children.push(XMLNode.fromObject(child));
				} else {
					node.children.push(child);
				}
			}
		} else {
			node.children = obj.children || [];
		}

		node.tagName = obj.tagName;
		node.attributes = obj.attributes || {};

		return node;
	}

	static fromBinary(buffer: Uint8Array): XMLNode {
		return decodeFromBinary(buffer);
	}

	appendNode(node: XMLNode | XMLNodeObject) {
		if (typeof node === "object") node = XMLNode.fromObject(node);
		if (!(node instanceof XMLNode)) throw new Error("invalid xml node");

		this.children = this.getContentNodes();
		this.children.push(node);
	}

	setAttribute(key: string, value: XMLNodeAttributeValue | undefined) {
		if (value != undefined) this.attributes[key] = String(value);
		else delete this.attributes[key];
	}

	getAttribute(key: string): string {
		return String(this.attributes[key] || "");
	}

	getOptionalContentNodes() {
		if (Array.isArray(this.children)) {
			return this.children.filter(child => child instanceof XMLNode);
		}
	}

	getOptionalContentBuffer() {
		if (this.children instanceof Uint8Array) {
			return this.children;
		} else if (typeof this.children === "string") {
			return StringToBytes(this.children);
		}
	}

	getOptionalContentString() {
		if (typeof this.children === "string") {
			return this.children;
		} else if (this.children instanceof Uint8Array) {
			return BytesToString(this.children);
		}
	}

	getOptionalContentNumber(): number | undefined {
		if (typeof this.children === "string") {
			const numberContent = Number(this.children);
			if (Number.isNaN(numberContent)) return undefined;

		} else if (this.children instanceof Uint8Array) {
			return BytesToInt(this.children);
		}
	}

	getContentNodes() {
		return this.getOptionalContentNodes() || [];
	}

	getContentBuffer() {
		return this.getOptionalContentBuffer() || new Uint8Array();
	}

	getContentString() {
		return this.getOptionalContentString() || "";
	}

	getContentNumber(): number {
		return this.getOptionalContentNumber() || 0;
	}

	querySelectorAll(selector: string): XMLNode[] {
		return querySelectorAll(this, selector);
	}

	querySelector(selector: string): XMLNode | undefined {
		return querySelectorAll(this, selector, 1)[0];
	}

	match(selector: string): boolean {
		return querySelectorAll(this, selector, 1).length > 0;
	}

	toBinary() {
		return encodeToBinary(this);
	}

	toString(): string {
		return encodeToString(this);
	}
}

function querySelectorAll(rootNode: XMLNode, selector: string, limit = 0) {
	const nodes: XMLNode[] = [];

	function matches(node: XMLNode, query: string) {
		const queryMatch = query.match(/^([^[]+)?((?:\[[^\]]+\])+)?$/);
		if (!queryMatch) throw new Error("invalid query selector", { cause: { query } });

		const tagName = queryMatch[1];
		const attrQuery = queryMatch[2];

		const tagMatch = tagName === "*" || !tagName || node.tagName === tagName;
		if (!tagMatch) return false;

		if (attrQuery) {
			const attrMatches = attrQuery.matchAll(/\[(.*?(?==|\^=|\*=|~=|\$=)|[^\]]+)?(=|\^=|\*=|~=|\$=)?([^\]]+)?\]/g);

			for (const match of attrMatches) {
				const attrName = match[1];
				const attrRule = match[2];
				const attrValue = match[3]?.replace(/'(.*)'$/, "$1").replace(/^"(.*)"$/, "$1");

				const attribute = node.attributes[attrName]?.toString();
				if (!attribute) return false;

				if (attrRule && attrValue) {
					switch (attrRule) {
						case "=":
							if (attribute !== attrValue) return false;
							break;
						case "^=":
							if (!attribute.startsWith(attrValue)) return false;
							break;
						case "$=":
							if (!attribute.endsWith(attrValue)) return false;
							break;
						case "*=":
							if (!attribute.includes(attrValue)) return false;
							break;
						case "~=":
							if (!attribute.split(" ").includes(attrValue)) return false;
							break;
						default:
							return false;
					}
				} else if (attrValue && attrValue !== attribute) {
					return false;
				}
			}
		}

		return true;
	}

	function traverse(node: XMLNode, queryParts: string[]) {
		if (queryParts.length === 0) return;

		const [currentQuery, ...remainingQuery] = queryParts;

		if (matches(node, currentQuery)) {
			if (remainingQuery.length === 0) {
				nodes.push(node);
				if (limit > 0 && nodes.length >= limit) return nodes;
			} else if (Array.isArray(node.children)) {
				for (const child of node.children) {
					traverse(child, remainingQuery);
				}
			}
		}

		if (Array.isArray(node.children)) {
			for (const child of node.children) {
				traverse(child, queryParts);
			}
		}
	}

	const selectors = selector.split(",").map(q => q.trim());

	for (const query of selectors) {
		const queryParts = query.split(">").map(q => q.trim());

		traverse(rootNode, queryParts);
	}

	return nodes;
}