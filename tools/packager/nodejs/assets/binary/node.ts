import { decodeFromBinary } from "./decode";
import { encodeToBinary, encodeToString } from "./encode";
import { JID } from "../jid";
import { BytesToInt, BytesToString, StringToBytes } from "../utils";

export type XMLNodeTagName = "iq" | "message" | "presence" | (string & { _?: never });
export type XMLNodeAttribute = string | JID | undefined;
export type XMLNodeAttributes = Record<string, XMLNodeAttribute>;
export type XMLNodeChildren = XMLNode[] | string | Uint8Array | null;

// Recursively extract all tags
type GetAllTags<T> = T extends { tagName: infer Tag }
	? Tag extends string
	? string extends Tag
	? never
	: Tag | (T extends { children: readonly (infer C)[] } ? GetAllTags<C> : never)
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

// Get attributes object for a specific tag
type GetAttrsObj<T, TagName extends string> =
	T extends { tagName: TagName; attributes: infer A }
	? A
	: T extends { children: readonly (infer C)[] }
	? GetAttrsObj<C, TagName>
	: never;

// Generate [attr], [attr=value], [attr*=value], etc. selector strings for an attrs object
type AttrsToSelectors<A> = {
	[K in keyof A & string]: A[K] extends string
	? `[${K}]` | `[${K}=${A[K]}]` | `[${K}*=${A[K]}]` | `[${K}^=${A[K]}]` | `[${K}$=${A[K]}]`
	: `[${K}]`
}[keyof A & string];

// Attribute operators
type AttributeOperator = "=" | "*=" | "^=" | "$=";

// Validate attribute selector: tag[attr=value]
type ValidateAttrSelector<T, Sel extends string> =
	Sel extends `${infer Tag}[${infer Attr}${AttributeOperator}${string}]`
	? Tag extends GetAllTags<T>
	? Attr extends keyof GetAttrsObj<T, Tag>
	? Tag
	: never
	: never
	: Sel extends GetAllTags<T>
	? Sel
	: never;

// Shared inner logic for hierarchy validation (avoids duplicating parent>child and parent > child branches)
type ValidateHierarchyInner<T, Parent extends string, Child extends string> =
	ValidateAttrSelector<T, Parent> extends never ? never
	: Parent extends `${infer ParentTag}[${string}]`
	? ValidateAttrSelector<GetChildren<T, ParentTag>, Child> extends never ? never
	: Child extends `${infer ChildTag}[${string}]` ? ChildTag : Child
	: ValidateAttrSelector<GetChildren<T, Parent>, Child> extends never ? never
	: Child extends `${infer ChildTag}[${string}]` ? ChildTag : Child;

// Validate hierarchy: parent>child or parent > child
type ValidateHierarchy<T, Sel extends string> =
	Sel extends `${infer Parent}>${infer Child}` ? ValidateHierarchyInner<T, Parent, Child>
	: Sel extends `${infer Parent} > ${infer Child}` ? ValidateHierarchyInner<T, Parent, Child>
	: ValidateAttrSelector<T, Sel>;

// Comma-separated selectors: sel1, sel2
type ValidateCommaSelectors<T, Sel extends string> =
	Sel extends `${infer First}, ${infer Rest}`
	? ValidateHierarchy<T, First> | ValidateCommaSelectors<T, Rest>
	: Sel extends `${infer First},${infer Rest}`
	? ValidateHierarchy<T, First> | ValidateCommaSelectors<T, Rest>
	: ValidateHierarchy<T, Sel>;

// Generate tag[attr...] selectors for IntelliSense
type TagAttrSelectors<T> = {
	[Tag in GetAllTags<T> & string]: GetAttrsObj<T, Tag> extends infer A
	? AttrsToSelectors<A> extends infer S
	? [S] extends [never] ? never : `${Tag}${S & string}`
	: never
	: never
}[GetAllTags<T> & string];

// Generate valid hierarchy selectors (parent>child and parent>child[attr...]) as string literals for IntelliSense
type HierarchySelectors<T> = {
	[Tag in GetAllTags<T> & string]: GetAllTags<GetChildren<T, Tag>> extends infer ChildTags
	? [ChildTags] extends [never] ? never
	: {
		[ChildTag in ChildTags & string]:
		`${Tag}>${ChildTag}` |
		(GetAttrsObj<GetChildren<T, Tag>, ChildTag> extends infer A
			? AttrsToSelectors<A> extends infer S
			? [S] extends [never] ? never : `${Tag}>${ChildTag}${S & string}`
			: never
			: never)
	}[ChildTags & string]
	: never
}[GetAllTags<T> & string];

// Generate standalone [attr...] selectors for IntelliSense (no tag prefix)
type StandaloneAttrSelectors<T> = {
	[Tag in GetAllTags<T> & string]: AttrsToSelectors<GetAttrsObj<T, Tag>>
}[GetAllTags<T> & string];

// Find all nodes (at any depth) that have a specific attribute
type GetNodeByAttr<T, AttrName extends string> =
	(T extends { tagName: string; attributes: infer A }
		? AttrName extends keyof A ? T : never
		: never) |
	(T extends { children: readonly (infer C)[] }
		? GetNodeByAttr<C, AttrName>
		: never);

// Extract attribute name from [attr], [attr=val], [attr*=val], etc.
type ExtractAttrName<Inner extends string> =
	Inner extends `${infer Attr}*=${string}` ? Attr :
	Inner extends `${infer Attr}^=${string}` ? Attr :
	Inner extends `${infer Attr}$=${string}` ? Attr :
	Inner extends `${infer Attr}=${string}` ? Attr :
	Inner;

type AdvancedSelector<T> = GetAllTags<T> | HierarchySelectors<T> | TagAttrSelectors<T> | StandaloneAttrSelectors<T>;

// Resolve node type from the last segment of a hierarchy selector (tag or tag[attr...])
type ResolveLastSegment<T, Last extends string> =
	Last extends `${infer LastTag}[${string}]` ? GetNodeByTag<T, LastTag> : GetNodeByTag<T, Last>;

type SelectorValue<T, Sel extends string> =
	Sel extends `${string}, ${string}` ? GetNodeByTag<T, ValidateCommaSelectors<T, Sel>>
	: Sel extends `${string}>${infer Last}` ? ResolveLastSegment<T, Last>
	: Sel extends `${string} > ${infer Last}` ? ResolveLastSegment<T, Last>
	: Sel extends `[${infer Inner}]` ? GetNodeByAttr<T, ExtractAttrName<Inner>>
	: Sel extends `${infer Tag}[${string}]` ? GetNodeByTag<T, Tag>
	: GetNodeByTag<T, Sel>;

export type XMLNodeObjectAttribute = string | number | boolean | JID | null | undefined;

export interface XMLNodeObject {
	tagName: XMLNodeTagName;
	attributes?: Record<string, XMLNodeObjectAttribute>;
	children?: (XMLNodeObject | XMLNode)[] | string | Uint8Array;
}

export type WithOptionalId<T extends XMLNodeObject> = T['attributes'] extends { id: infer I } ?
	Omit<T, 'attributes'> & { attributes: { id?: I } & Omit<T['attributes'], 'id'> } :
	T;

type AttributeKeys<T extends XMLNodeObject> = keyof T["attributes"];

type ChildNodesValue<T> = [T] extends [XMLNode<never>]
	? XMLNode<XMLNodeObject>[]
	: T extends { children: infer Child } ? Child : XMLNode<XMLNodeObject>[];

export type XMLNodeData<T extends XMLNodeObject> = XMLNode<T> | WithOptionalId<T> | Uint8Array;

export class XMLNode<T extends XMLNodeObject = XMLNodeObject> {
	tagName: T["tagName"];
	attributes: XMLNodeAttributes;
	children: XMLNodeChildren;

	constructor(node?: XMLNodeData<T>) {
		if (!node) return;
		if (node instanceof XMLNode) return node as XMLNode<T>;
		if (node instanceof Uint8Array) return decodeFromBinary(node) as XMLNode<T>;

		this.tagName = node.tagName || "";
		this.attributes = {};

		for (const key in node.attributes || {}) {
			this.setAttribute(key, node.attributes![key]);
		}

		this.children = (Array.isArray(node.children) ?
			node.children.map(child => new XMLNode(child)) :
			node.children ?? null);
	}

	appendNode<N extends XMLNodeObject = XMLNodeObject>(node: XMLNodeData<N>) {
		if (node instanceof Uint8Array) node = decodeFromBinary(node) as XMLNode<N>;
		else if (typeof node === "object") node = new XMLNode<N>(node);
		if (!(node instanceof XMLNode)) throw new Error("invalid xml node");

		this.children = this.getContentNodes();
		this.children.push(node);
	}

	setAttribute<K extends AttributeKeys<T>>(key: K, value: XMLNodeObjectAttribute): void;
	setAttribute(key: string, value: XMLNodeObjectAttribute): void;
	setAttribute(key: string, value: XMLNodeObjectAttribute) {
		const attributes: XMLNodeAttributes = this.attributes;

		if (value != undefined) attributes[key] = String(value);
		else delete attributes[key];
	}

	getAttribute<K extends AttributeKeys<T>>(key: K): string;
	getAttribute(key: string): string;
	getAttribute(key: any): any {
		return String(this.attributes[key] || "");
	}

	getAttributeJid<J extends JID, K extends AttributeKeys<T>>(key: K): J | undefined;
	getAttributeJid<J extends JID>(key: string): J | undefined;
	getAttributeJid(key: any): any {
		const value = this.attributes[key];
		if (value instanceof JID) return value;
	}

	getAttributeNumber<K extends AttributeKeys<T>>(key: K): number | undefined;
	getAttributeNumber(key: string): number | undefined;
	getAttributeNumber(key: any): any {
		const value = Number(this.attributes[key]);
		if (!Number.isNaN(value)) return value;
	}

	getContentNodes(): XMLNode[] | undefined {
		if (!Array.isArray(this.children)) return;

		return (this.children as any[])
			.filter(child => child instanceof XMLNode);
	}

	getContentBuffer(): Uint8Array | undefined {
		if (this.children instanceof Uint8Array) {
			return this.children;
		} else if (typeof this.children === "string") {
			return StringToBytes(this.children);
		}
	}

	getContentString(): string | undefined {
		if (typeof this.children === "string") {
			return this.children;
		} else if (this.children instanceof Uint8Array) {
			return BytesToString(this.children);
		}
	}

	getContentNumber(): number | undefined {
		if (typeof this.children === "string") {
			const numberContent = Number(this.children);
			if (Number.isNaN(numberContent)) return undefined;

		} else if (this.children instanceof Uint8Array) {
			return BytesToInt(this.children);
		}
	}

	querySelectorAll<Sel extends AdvancedSelector<T>>(selector: Sel): XMLNode<SelectorValue<T, Sel>>[];
	querySelectorAll(selector: string): XMLNode<XMLNodeObject>[];
	querySelectorAll(selector: string): XMLNode<any>[] {
		return querySelectorAll(this, selector);
	}

	querySelector<Sel extends AdvancedSelector<T>>(selector: Sel): XMLNode<SelectorValue<T, Sel>>;
	querySelector(selector: string): XMLNode<XMLNodeObject> | undefined;
	querySelector(selector: any): any {
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