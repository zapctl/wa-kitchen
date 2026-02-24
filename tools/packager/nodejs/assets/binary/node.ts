import { decodeFromBinary } from "./decode";
import { encodeToBinary, encodeToString } from "./encode";
import { JID } from "../jid";
import { BytesToInt, BytesToString, StringToBytes } from "../utils";

export type XMLNodeTagName = "iq" | "message" | "presence" | (string & { _?: never });
export type XMLNodeAttribute = string | JID | undefined;
export type XMLNodeAttributes = Record<string, XMLNodeAttribute>;
export type XMLNodeChildren = XMLNode[] | string | Uint8Array | null;

export type XMLNodeObjectAttribute = string | number | boolean | JID | null | undefined;

export interface XMLNodeObject {
	tagName: XMLNodeTagName;
	attributes?: Record<string, XMLNodeObjectAttribute>;
	children?: (XMLNodeObject | XMLNode)[] | string | Uint8Array;
}

export type WithOptionalId<T extends XMLNodeObject> = T['attributes'] extends { id: infer I } ?
	Omit<T, 'attributes'> & { attributes: Omit<T['attributes'], 'id'> & { id?: I } } :
	T;

// Recursively extract all tags
type GetAllTags<T> = T extends { tagName: infer Tag }
	? Tag extends string
	? Tag | (T extends { children: readonly (infer C)[] } ? GetAllTags<C> : never)
	: never
	: never;

// Find node type by tag
type GetNodeByTag<T, TagName extends string> = T extends { tagName: TagName }
	? T
	: T extends { children: readonly (infer C)[] }
	? GetNodeByTag<C, TagName>
	: never;

// Extract direct children of a tag
type GetChildren<T, TagName extends string> = T extends { tagName: TagName; children: readonly (infer C)[] }
	? C
	: T extends { children: readonly (infer C)[] }
	? GetChildren<C, TagName>
	: never;

// Check if a tag has a specific attribute
type HasAttr<T, TagName extends string, AttrName extends string> =
	T extends { tagName: TagName; attributes: infer A }
	? AttrName extends keyof A ? true : false
	: T extends { children: readonly (infer C)[] }
	? HasAttr<C, TagName, AttrName>
	: false;

// Attribute operators
type AttributeOperator = "=" | "*=" | "^=" | "$=";

// Validate attribute selector: tag[attr=value]
type ValidateAttrSelector<T, Sel extends string> =
	Sel extends `${infer Tag}[${infer Attr}${AttributeOperator}${string}]`
	? Tag extends GetAllTags<T>
	? HasAttr<T, Tag, Attr> extends true
	? Tag
	: never
	: never
	: Sel extends GetAllTags<T>
	? Sel
	: never;

// Validate hierarchy: parent>child or parent > child
type ValidateHierarchy<T, Sel extends string> =
	Sel extends `${infer Parent}>${infer Child}`
	? ValidateAttrSelector<T, Parent> extends never
	? never
	: Parent extends `${infer ParentTag}[${string}]`
	? ValidateAttrSelector<GetChildren<T, ParentTag>, Child> extends never
	? never
	: Child extends `${infer ChildTag}[${string}]`
	? ChildTag
	: Child
	: ValidateAttrSelector<GetChildren<T, Parent>, Child> extends never
	? never
	: Child extends `${infer ChildTag}[${string}]`
	? ChildTag
	: Child
	: Sel extends `${infer Parent} > ${infer Child}`
	? ValidateAttrSelector<T, Parent> extends never
	? never
	: Parent extends `${infer ParentTag}[${string}]`
	? ValidateAttrSelector<GetChildren<T, ParentTag>, Child> extends never
	? never
	: Child extends `${infer ChildTag}[${string}]`
	? ChildTag
	: Child
	: ValidateAttrSelector<GetChildren<T, Parent>, Child> extends never
	? never
	: Child extends `${infer ChildTag}[${string}]`
	? ChildTag
	: Child
	: ValidateAttrSelector<T, Sel>;

// Comma-separated selectors: sel1, sel2
type ValidateCommaSelectors<T, Sel extends string> =
	Sel extends `${infer First}, ${infer Rest}`
	? ValidateHierarchy<T, First> | ValidateCommaSelectors<T, Rest>
	: Sel extends `${infer First},${infer Rest}`
	? ValidateHierarchy<T, First> | ValidateCommaSelectors<T, Rest>
	: ValidateHierarchy<T, Sel>;

// Main selector type
type AdvancedSelector<T> = ValidateCommaSelectors<T, string> extends never ? string : ValidateCommaSelectors<T, string>;

// Return type resolution
type ResolveReturnType<T, Sel extends string> =
	Sel extends `${string}, ${string}`
	? GetNodeByTag<T, ValidateCommaSelectors<T, Sel>>
	: Sel extends `${string}>${infer Last}`
	? Last extends `${infer LastTag}[${string}]`
	? GetNodeByTag<T, LastTag>
	: GetNodeByTag<T, Last>
	: Sel extends `${string} > ${infer Last}`
	? Last extends `${infer LastTag}[${string}]`
	? GetNodeByTag<T, LastTag>
	: GetNodeByTag<T, Last>
	: Sel extends `${infer Tag}[${string}]`
	? GetNodeByTag<T, Tag>
	: GetNodeByTag<T, Sel>;

// Typed XMLNode array alias based on children
type ResolveChildrenReturnType<T> = T extends { children: readonly (infer Child)[] }
	? Child extends XMLNodeObject
	? XMLNode<Child>[]
	: XMLNode<XMLNodeObject>[]
	: XMLNode<XMLNodeObject>[];

// Get all available attribute keys
type GetAttributeKeys<T> = T extends { attributes: infer A }
	? keyof A
	: never;

export type XMLNodeData<T extends XMLNodeObject> = XMLNode<T> | T | Uint8Array;

export class XMLNode<T extends XMLNodeObject = XMLNodeObject> {
	tagName: XMLNodeTagName = "";
	attributes: XMLNodeAttributes = {};
	children: XMLNodeChildren = null;

	constructor(node?: XMLNodeData<WithOptionalId<T>>) {
		if (!node) return;
		if (node instanceof XMLNode) return node as XMLNode<T>;
		if (node instanceof Uint8Array) return decodeFromBinary(node) as XMLNode<T>;

		this.tagName = node.tagName;

		for (const key in node.attributes || {}) {
			this.setAttribute(key, node.attributes![key]);
		}

		this.children = Array.isArray(node.children) ?
			node.children.map(child => new XMLNode(child)) :
			node.children ?? null;
	}

	appendNode<T extends XMLNodeObject = XMLNodeObject>(node: XMLNodeData<T>) {
		if (node instanceof Uint8Array) node = decodeFromBinary(node) as XMLNode<T>;
		else if (typeof node === "object") node = new XMLNode<XMLNodeObject>(node);
		if (!(node instanceof XMLNode)) throw new Error("invalid xml node");

		this.children = this.getContentNodes();
		this.children.push(node);
	}

	setAttribute<K extends GetAttributeKeys<T>>(key: K, value: XMLNodeObjectAttribute): void;
	setAttribute(key: string, value: XMLNodeObjectAttribute): void;
	setAttribute(key: string, value: XMLNodeObjectAttribute) {
		if (value != undefined) this.attributes[key] = String(value);
		else delete this.attributes[key];
	}

	getAttribute<K extends GetAttributeKeys<T>>(key: K): string;
	getAttribute(key: string): string;
	getAttribute(key: string): string {
		return String(this.attributes[key] || "");
	}

	getOptionalContentNodes() {
		if (!Array.isArray(this.children)) return;

		return this.children
			.filter(child => child instanceof XMLNode) as ResolveChildrenReturnType<T>;
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

	getOptionalContentNumber() {
		if (typeof this.children === "string") {
			const numberContent = Number(this.children);
			if (Number.isNaN(numberContent)) return undefined;

		} else if (this.children instanceof Uint8Array) {
			return BytesToInt(this.children);
		}
	}

	getContentNodes() {
		return this.getOptionalContentNodes() || [] as unknown as ResolveChildrenReturnType<T>;
	}

	getContentBuffer() {
		return this.getOptionalContentBuffer() || new Uint8Array();
	}

	getContentString() {
		return this.getOptionalContentString() || "";
	}

	getContentNumber() {
		return this.getOptionalContentNumber() || 0;
	}

	querySelectorAll<Sel extends AdvancedSelector<T>>(selector: Sel): XMLNode<ResolveReturnType<T, Sel>>[];
	querySelectorAll(selector: string): XMLNode<XMLNodeObject>[];
	querySelectorAll(selector: string): XMLNode<any>[] {
		return querySelectorAll(this, selector);
	}

	querySelector<Sel extends AdvancedSelector<T>>(selector: Sel): XMLNode<ResolveReturnType<T, Sel>>;
	querySelector(selector: string): XMLNode<XMLNodeObject> | undefined;
	querySelector(selector: string): XMLNode<any> | undefined {
		return querySelectorAll(this, selector, 1)[0];
	}

	match(selector: string) {
		return querySelectorAll(this, selector, 1).length > 0;
	}

	toBinary() {
		return encodeToBinary(this);
	}

	toString() {
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

			for (const match of Array.from(attrMatches)) {
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