//# sourceURL=smax-schema.js
const modulesMap = require("__debug").modulesMap;

const WAWap = require("WAWap");
const WASmaxJsx = require("WASmaxJsx");
const WASmaxParseUtils = require("WASmaxParseUtils");
const WASmaxParseJid = require("WASmaxParseJid");
const WASmaxParseReference = require("WASmaxParseReference");
const WASmaxAttrs = require("WASmaxAttrs");
const WASmaxChildren = require("WASmaxChildren");
const WASmaxMixins = require("WASmaxMixins");

const METADATA_SYMBOL = Symbol("metadata");
const PROP_RETRY_ERROR = new Error("retry");

const skipForcedMixinFailure = new Set();

const Types = {
    STANZA: "node",
    STANZA_ID: "id",
    STRING: "string",
    NUMBER: "number",
    BOOLEAN: "boolean",
    BINARY: "binary",
    JID: "jid",
    UNION: "union",
    ARRAY: "array",
};

const Placeholder = {
    STANZA: { tag: "", attrs: {}, content: null },
    STANZA_ID: "123.12456-789",
    STRING: "placeholder",
    BOOLEAN: true,
    JID: {
        UserJid: "123456789@s.whatsapp.net",
        DomainJid: "s.whatsapp.net",
        LidUserJid: "123456789@lid",
        BroadcastJid: "123456789@broadcast",
        DeviceJid: "123456789:1@s.whatsapp.net",
        CallJid: "123456789123456789@call",
        GroupJid: "123456789@g.us",
        StatusJid: "status@broadcast",
        ChatJid: "123456789@s.whatsapp.net",
        NewsletterJid: "123456789@newsletter",
    },
};

const WAWapTypes = {
    generateId: { type: Types.STANZA_ID },
    STANZA_ID: { type: Types.STANZA_ID },
    CUSTOM_STRING: { type: Types.STRING },
    CALL_ID: { type: Types.STRING },
    MAYBE_CUSTOM_STRING: { type: Types.STRING },
    INT: { type: Types.NUMBER, as: Types.STRING },
    G_US: { type: Types.JID, jidTypes: ["GroupJid"] },
    S_WHATSAPP_NET: { type: Types.JID, jidTypes: ["DomainJid"] },
    STATUS_BROADCAST: { type: Types.JID, jidTypes: ["StatusJid"] },
    NEWSLETTER: { type: Types.JID, jidTypes: ["NewsletterJid"] },
    CALL: { type: Types.JID, jidTypes: ["CallJid"] },
    HOSTED: { type: Types.JID, jidTypes: ["DomainJid"] },
    HOSTED_LID: { type: Types.JID, jidTypes: ["DomainJid"] },
    JID: { type: Types.JID, jidTypes: Object.keys(Placeholder.JID) },
    DOMAIN_JID: { type: Types.JID, jidTypes: ["DomainJid"] },
    USER_JID: { type: Types.JID, jidTypes: ["UserJid", "LidUserJid"] },
    DEVICE_JID: { type: Types.JID, jidTypes: ["DeviceJid"] },
    GROUP_JID: { type: Types.JID, jidTypes: ["GroupJid"] },
    BROADCAST_JID: { type: Types.JID, jidTypes: ["BroadcastJid"] },
    CALL_JID: { type: Types.JID, jidTypes: ["CallJid"] },
    NEWSLETTER_JID: { type: Types.JID, jidTypes: ["NewsletterJid"] },
};

function getValueFromMetadata(metadata) {
    if (metadata.as) {
        const value = getValueFromMetadata({ ...metadata, as: undefined });

        switch (metadata.as) {
            case Types.STRING:
                return String(value);
            case Types.BINARY:
                return new TextEncoder().encode(String(value));
            default:
                throw new Error(`Invalid metadata 'as' type '${metadata.as}'`);
        }
    }

    if (metadata.literal) return metadata.literal;
    else if (metadata.enum) return metadata.enum[0];

    switch (metadata.type) {
        case Types.STANZA_ID:
            return Placeholder.STANZA_ID;
        case Types.STANZA:
            return structuredClone(Placeholder.STANZA);
        case Types.STRING:
            return Placeholder.STRING;
        case Types.BOOLEAN:
            return Placeholder.BOOLEAN;
        case Types.BINARY:
            return new Uint8Array(metadata.min || 0);
        case Types.NUMBER: {
            const min = metadata.min ?? 1;
            const max = metadata.max ?? 2 ** 32;

            return Math.round(Math.random() * (max - min) + min);
        }
        case Types.JID:
            return Placeholder.JID[metadata.jidTypes?.[0]] ||
                Placeholder.JID.DomainJid;
        case Types.ARRAY:
            return [];
        default:
            return undefined;
    }
}

function mergeMetadata(oldMetadata, newMetadata) {
    const mergedMetadata = { ...oldMetadata, ...newMetadata };

    if (oldMetadata.type && newMetadata.type === "string") {
        mergedMetadata.type = oldMetadata.type;
    }

    return mergedMetadata;
}

function assignMetadata(obj, metadata = {}) {
    if (typeof obj === "function") {
        return (...args) => {
            args.forEach(arg => assignMetadata(arg, metadata));
            return assignMetadata(obj(...args), metadata);
        }
    }

    console.log("assignMetadata", obj, metadata);

    obj = Object(obj);
    const currentMetadata = obj[METADATA_SYMBOL] || {};

    if (metadata.attrs) {
        const attrsMetadata = currentMetadata.attrs || {};

        for (const attrName in metadata.attrs) {
            if (!attrName) continue;

            const mergedAttrMetadata = mergeMetadata(
                attrsMetadata[attrName] || {},
                metadata.attrs[attrName],
            );

            if (!obj.attrs) obj.attrs = {};
            obj.attrs[attrName] = getValueFromMetadata(mergedAttrMetadata);

            attrsMetadata[attrName] = mergedAttrMetadata;
        }

        metadata.attrs = attrsMetadata;
    }

    if (metadata.content) {
        const mergedContent = mergeMetadata(
            currentMetadata.content || {},
            metadata.content,
        );

        obj.content = getValueFromMetadata(mergedContent);
        metadata.content = mergedContent;
    }

    if (metadata.unions) {
        const unions = currentMetadata.unions || [];
        unions.push(...metadata.unions);

        metadata.unions = unions;
    }

    if (typeof obj?.assignMetadata === "function") {
        if (obj.assignMetadata(metadata)) throw PROP_RETRY_ERROR;
    }

    return Object.defineProperty(obj, METADATA_SYMBOL, {
        value: { ...currentMetadata, ...metadata },
        configurable: false,
        enumerable: false,
        writable: true,
    });
}

function pushNodeChild(node, tagName, metadata = {}) {
    for (let i = 0; i < (metadata.min || 1); i++) {
        const child = structuredClone(Placeholder.STANZA);
        child.tag = tagName;

        if (!node.content) node.content = [child];
        else node.content.push(child);

        assignMetadata(child, metadata);
    }

    return node;
}

function deepEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function mergeStanzas(...nodes) {
    return nodes.reduce((acc, node) => {
        const existentNode = acc.find(child => child.tag === node.tag);

        if (!existentNode) {
            acc.push(node);
            return acc;
        }

        const existingMetadata = existentNode[METADATA_SYMBOL] || {};
        const nodeMetadata = node[METADATA_SYMBOL] || {};

        const mergedAttrs = {
            ...existentNode.attrs || {},
            ...node.attrs || {},
        };

        const mergedContent = (() => {
            if (
                Array.isArray(existentNode.content) &&
                Array.isArray(node.content)
            ) {
                return mergeStanzas(
                    ...existentNode.content,
                    ...node.content,
                );
            }

            return node.content || existentNode.content;
        })();

        const mergedMetadata = {
            namespace: existingMetadata.namespace || nodeMetadata.namespace,
            variant: existingMetadata.variant || nodeMetadata.variant,
            attrs: {
                ...existingMetadata.attrs || {},
                ...nodeMetadata.attrs || {},
            },
            content: {
                ...existingMetadata.content || {},
                ...nodeMetadata.content || {},
            },
            unions: mergeStanzas(
                ...existingMetadata.unions || [],
                ...nodeMetadata.unions || [],
            ),
        }

        Object.entries(mergedMetadata).forEach(([key, val]) => {
            const isUndefined = val == undefined;
            const isEmpty = val && typeof val === "object" && !Object.keys(val).length;

            if (isUndefined || isEmpty) delete mergedMetadata[key];
        });

        existentNode.attrs = mergedAttrs;
        existentNode.content = mergedContent;

        Object.defineProperty(existentNode, METADATA_SYMBOL, {
            value: mergedMetadata,
            configurable: false,
            enumerable: false,
            writable: true,
        });

        return acc;
    }, []);
}

function createModuleMetadataProxy(targetModule) {
    return new Proxy(targetModule, {
        get(target, propertyName) {
            const originalValue = target[propertyName];

            if (propertyName in WAWapTypes) return assignMetadata(
                originalValue,
                WAWapTypes[propertyName],
            );

            switch (propertyName) {
                case "assertTag":
                    return (node, tagName) => {
                        assignMetadata(node, { type: Types.STANZA });

                        node.tag = tagName;

                        return originalValue(node, tagName);
                    }

                case "literal":
                    return (typeFactory, node, attrName, literal) => {
                        const isPlaceholder = Object.values(Placeholder).includes(literal);

                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: typeof literal,
                                    literal: !isPlaceholder ? literal : undefined,
                                }
                            }
                        });

                        assignMetadata(literal, {
                            type: typeof literal,
                            literal,
                        });

                        return originalValue(typeFactory, node, attrName, literal);
                    }

                case "optional":
                    return (typeFactory, node, attrName, ...rest) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    optional: true
                                }
                            }
                        });

                        return originalValue(typeFactory, node, attrName, ...rest);
                    }

                case "optionalLiteral":
                    return (typeFactory, node, attrName, literal) => {
                        const isPlaceholder = Object.values(Placeholder).includes(literal);

                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: typeof literal,
                                    literal: !isPlaceholder ? literal : undefined,
                                    optional: true,
                                }
                            }
                        });

                        assignMetadata(literal, {
                            type: typeof literal,
                            literal,
                        });

                        return originalValue(typeFactory, node, attrName, literal);
                    }

                case "attrInt":
                    return (node, attrName) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.NUMBER,
                                    as: Types.STRING,
                                }
                            }
                        });

                        return originalValue(node, attrName);
                    }

                case "attrUserJid":
                case "attrLidUserJid":
                case "attrDeviceJid":
                case "attrGroupJid":
                case "attrCallJid":
                case "attrDomainJid":
                case "attrBroadcastJid":
                case "attrStatusJid":
                case "attrNewsletterJid":
                    return (node, attrName) => {
                        const jidType = propertyName.replace("attr", "");

                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.JID,
                                    jidTypes: [jidType],
                                }
                            }
                        });

                        return originalValue(node, attrName);
                    }

                case "literalJid":
                    return (typeFactory, node, attrName, literal) => {
                        const isPlaceholder = Object.values(Placeholder.JID).includes(literal);

                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.JID,
                                    literal: !isPlaceholder ? String(literal) : undefined,
                                }
                            }
                        });

                        assignMetadata(literal, {
                            type: Types.JID,
                            literal: !isPlaceholder ? String(literal) : undefined,
                        });

                        return originalValue(typeFactory, node, attrName, literal);
                    }

                case "attrFromReference":
                case "attrStringFromReference":
                case "optionalAttrFromReference":
                    return (...props) => {
                        const node = props.find(prop => prop.tag != undefined);
                        const attrName = props.find(prop => Array.isArray(prop) &&
                            prop.length === 1)?.[0];

                        if (node) assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    reference: true,
                                }
                            }
                        });

                        return originalValue(...props);
                    }

                case "attrJidEnum":
                    return (node, attrName, enumValidator) => {
                        const jidTypes = enumValidator.typeName.split("|");

                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.JID,
                                    jidTypes: Array.from(new Set(jidTypes)),
                                }
                            }
                        });

                        return originalValue(node, attrName, enumValidator);
                    }

                case "attrStanzaId":
                    return (node, attrName) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.STANZA_ID
                                }
                            }
                        });

                        return originalValue(node, attrName);
                    }

                case "attrString":
                    return (node, attrName) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.STRING
                                }
                            }
                        });

                        return originalValue(node, attrName);
                    }

                case "attrStringEnum":
                    return (node, attrName, enumObj) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.STRING,
                                    enum: Object.values(enumObj),
                                }
                            }
                        });

                        return originalValue(node, attrName, enumObj);
                    }

                case "attrIntRange":
                    return (node, attrName, min, max) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            attrs: {
                                [attrName]: {
                                    type: Types.NUMBER,
                                    as: Types.STRING,
                                    min,
                                    max,
                                }
                            }
                        });

                        return originalValue(node, attrName, min, max);
                    }

                case "flattenedChildWithTag":
                    return (node, tagName) => {
                        assignMetadata(node, { type: Types.STANZA });

                        pushNodeChild(node, tagName);

                        return originalValue(node, tagName);
                    }

                case "mapChildrenWithTag":
                    return (node, tagName, min, max, callbackfn) => {
                        assignMetadata(node, { type: Types.STANZA });

                        pushNodeChild(node, tagName, { min, max });

                        return originalValue(node, tagName, min, max, callbackfn);
                    }

                case "optionalChild":
                    return (node, tagName) => {
                        assignMetadata(node, { type: Types.STANZA });

                        pushNodeChild(node, tagName, { min: 0 });

                        return originalValue(node, tagName);
                    }

                case "optionalChildWithTag":
                    return (node, tagName, callbackfn) => {
                        assignMetadata(node, { type: Types.STANZA });

                        pushNodeChild(node, tagName, { min: 0 });

                        return originalValue(node, tagName, callbackfn);
                    }

                case "contentBytes":
                    return (node) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            content: { type: Types.BINARY }
                        });

                        return originalValue(node);
                    }

                case "contentInt":
                    return (node) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            content: {
                                type: Types.NUMBER,
                                as: Types.BINARY,
                            }
                        });

                        return originalValue(node);
                    }

                case "contentLiteralBytes":
                    return (node, literal) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            content: {
                                type: Types.BINARY,
                                literal,
                            }
                        });
                        assignMetadata(literal, { type: Types.BINARY });

                        return originalValue(node, literal);
                    }

                case "contentStringEnum":
                    return (node, enumObj) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            content: {
                                type: Types.STRING,
                                as: Types.BINARY,
                                enum: Object.values(enumObj),
                            }
                        });

                        return originalValue(node, enumObj);
                    }

                case "contentBytesRange":
                    return (node, min, max) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            content: {
                                type: Types.BINARY,
                                min,
                                max,
                            }
                        });

                        return originalValue(node, min, max);
                    }

                case "literalContent":
                    return (typeFactory, node, content) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            content: {
                                type: typeof content,
                                literal: content,
                            }
                        });
                        assignMetadata(content, { type: typeof content });

                        return originalValue(typeFactory, node, content);
                    }

                case "contentString":
                    return (node) => {
                        assignMetadata(node, {
                            type: Types.STANZA,
                            content: {
                                type: Types.STRING,
                                as: Types.BINARY,
                            }
                        });

                        return originalValue(node);
                    }

                case "errorMixinDisjunction":
                    return (node, variantNames, results) => {
                        assignMetadata(node, { type: Types.STANZA });

                        const nodeMetadata = node[METADATA_SYMBOL] || {};

                        return nodeMetadata.mixinReturn ||
                            originalValue(node, variantNames, results);
                    }

                // case "USER_JID":
                //     return (jid) => {
                //         assignMetadata(jid, {
                //             type: Types.JID,
                //             jidTypes: ["UserJid"],
                //         });

                //         return originalValue(jid);
                //     }

                case "OPTIONAL":
                    return (factory, value) => {
                        return assignMetadata(
                            originalValue(factory, value),
                            { optional: true },
                        );
                    }

                case "OPTIONAL_LITERAL":
                    return (literal, enabled) => {
                        assignMetadata(enabled, {
                            type: Types.BOOLEAN,
                        });

                        return assignMetadata(
                            originalValue(literal, enabled),
                            { optional: true, literal },
                        );
                    }

                case "OPTIONAL_CHILD":
                    return (child, args) => {
                        return assignMetadata(
                            originalValue(child, args),
                            { optional: true },
                        );
                    }

                case "REPEATED_CHILD":
                    return (factory, arr, min, max) => {
                        assignMetadata(arr, { type: Types.ARRAY });

                        return mergeStanzas(originalValue(factory, arr, min, max))
                            .map(child => assignMetadata(child, { min, max }));
                    }

                case "smax":
                    return (tag, attrs, content) => {
                        const rawAttrs = Object.fromEntries(Object.entries(attrs || {})
                            .map(([key, val]) => [key, val.valueOf()]));

                        const attrsMetadata = Object.fromEntries(Object.entries(attrs || {})
                            .map(([key, val]) => {
                                if (!val) return [key, val];
                                if (val[METADATA_SYMBOL]) return [key, val[METADATA_SYMBOL]];

                                const literal = val.valueOf();
                                return [key, { type: typeof literal, literal }];
                            }));

                        return assignMetadata(
                            originalValue(tag, rawAttrs, content),
                            { attrs: attrsMetadata },
                        );
                    }

                case "mergeStanzas":
                    return (a, b) => mergeStanzas(a, b)[0];

                default:
                    return originalValue;
            }
        },
    });
}

function createModuleName(mod) {
    const cleanName = mod.moduleName.replace(/^WASmaxIn|Mixin$/g, "");
    const variant = mod.parserName.replace(/^parse|Mixin$/g, "");
    const namespace = cleanName.replace(variant, "");

    return { namespace, variant };
}

function createMixinProxy(mixinModule, moduleName) {
    return new Proxy(mixinModule, {
        get(target, propertyName) {
            const originalValue = target[propertyName];
            const isParseMixin = typeof originalValue === "function" &&
                propertyName.startsWith("parse") &&
                propertyName.endsWith("Mixin");

            if (!isParseMixin) return originalValue;

            return function (node, ...rest) {
                const proxy = {};
                const result = originalValue(proxy, ...rest);
                const isUnion = !skipForcedMixinFailure.has(originalValue);

                if (!result?.success) {
                    if (result.mixin) skipForcedMixinFailure.add(result.mixin);
                    return result;
                }

                if (typeof node.tag === "string") proxy.tag = node.tag;
                else if (typeof proxy.tag === "string") node.tag = proxy.tag;

                assignMetadata(proxy, createModuleName({
                    moduleName,
                    parserName: propertyName,
                }));

                if (isUnion) {
                    assignMetadata(node, {
                        unions: [proxy],
                        mixinReturn: result,
                    });

                    return {
                        success: false,
                        error: "Forced failure to capture all union variants",
                        mixin: originalValue,
                    };
                } else {
                    mergeStanzas(node, proxy);
                    return result;
                }
            };
        }
    });
}

function createPropProxy(hint = new Map(), path = "") {
    function pathJoin(...paths) {
        return paths.filter(Boolean).map(String).join(".");
    }

    function assignMetadata(metadata) {
        const value = getValueFromMetadata(metadata);
        if (!value) return false;

        if (hint.has(path)) {
            const propHint = hint.get(path);
            const oldValue = getValueFromMetadata(propHint.metadata);

            if (deepEquals(oldValue, value)) return false;
        }

        hint.set(path, { value, metadata });

        return true;
    }

    function proxy(propertyName) {
        const propertyPath = pathJoin(path, propertyName);
        const resolvedPath = hint.has(propertyPath) ? propertyPath : path;
        const hintData = hint.get(resolvedPath);

        if (!hintData) return createPropProxy(hint, propertyPath);

        if (hintData.metadata.type === Types.ARRAY) return [
            createPropProxy(hint, pathJoin(propertyPath, "[0]"))
        ];

        if (hint.has(propertyPath)) return hintData.value;
        return hintData.value?.[propertyName];
    }

    function toObject(target) {
        const obj = {};

        for (const key of Reflect.ownKeys(target)) {
            const value = target[key];
            const descriptor = Reflect.getOwnPropertyDescriptor(target, key);

            const objValue = Array.isArray(value) ?
                value.map(val => val?.toObject?.() ?? val) :
                value?.toObject?.() ?? value;

            Object.defineProperty(obj, key, {
                value: objValue,
                writable: descriptor?.writable,
                enumerable: descriptor?.enumerable,
                configurable: descriptor?.configurable,
            });
        }

        return obj;
    }

    function clear() {
        for (const hintData of hint.values()) {
            if (!hintData.value) continue;

            if (Array.isArray(hintData.value)) {
                hintData.value.splice(0);
            } else if (typeof hintData.value === "object") {
                if (Array.isArray(hintData.value.content)) {
                    hintData.value.content.splice(0);
                }
                if (Array.isArray(hintData.value.unions)) {
                    hintData.value.unions.splice(0);
                }
            }
        }
    }

    const instance = new Proxy({}, {
        get(target, propertyName) {
            switch (propertyName) {
                case METADATA_SYMBOL: return target[propertyName];
                case "assignMetadata": return assignMetadata;
                case "toObject": return () => toObject(instance);
                case "clear": return clear;
                default: return proxy(propertyName);
            }
        },
        set(target, propertyName, propValue) {
            if (propValue === instance) {
                throw new Error("Circular reference detected, cannot assign itself");
            }

            if (propValue.assignMetadata) {
                debugger
            }

            if (propertyName === METADATA_SYMBOL) {
                target[propertyName] = propValue;
                return true;
            }

            if (hint.has(path)) {
                const value = hint.get(path).value;

                if (value && typeof value === "object") {
                    value[propertyName] = propValue;
                    return true;
                }
            }

            hint.set(pathJoin(path, propertyName), {
                value: propValue,
                metadata: { literal: propValue },
            });

            return true;
        },
        ownKeys(target) {
            const keys = new Set(Reflect.ownKeys(target));
            const rootHintData = hint.get(path);

            if (typeof rootHintData?.value === "object") {
                for (const key of Object.keys(rootHintData.value)) {
                    keys.add(key);
                }
            }

            for (const prop of hint.keys()) {
                if (prop === path) continue;

                if (!prop.startsWith(path)) continue;

                const rest = prop.slice(path.length).replace(/^\./, "");
                const key = rest.split(".")[0];

                if (key) keys.add(key);
            }

            return Array.from(keys);
        },
        getOwnPropertyDescriptor(target, propertyName) {
            if (propertyName in target) {
                return Reflect.getOwnPropertyDescriptor(target, propertyName);
            }

            return {
                enumerable: true,
                configurable: true,
            };
        },
    });

    return instance;
}

function withMockedModules(callback) {
    const originalExports = {};

    try {
        modulesMap["WAWap"].exports = createModuleMetadataProxy(WAWap);
        modulesMap["WASmaxJsx"].exports = createModuleMetadataProxy(WASmaxJsx);
        modulesMap["WASmaxParseUtils"].exports = createModuleMetadataProxy(WASmaxParseUtils);
        modulesMap["WASmaxParseJid"].exports = createModuleMetadataProxy(WASmaxParseJid);
        modulesMap["WASmaxParseReference"].exports = createModuleMetadataProxy(WASmaxParseReference);
        modulesMap["WASmaxAttrs"].exports = createModuleMetadataProxy(WASmaxAttrs);
        modulesMap["WASmaxChildren"].exports = createModuleMetadataProxy(WASmaxChildren);
        modulesMap["WASmaxMixins"].exports = createModuleMetadataProxy(WASmaxMixins);

        Object.keys(modulesMap)
            .filter(key => key.includes("Mixin"))
            .forEach(moduleName => {
                const module = require(moduleName);
                if (!module || typeof module !== "object") return;

                originalExports[moduleName] = module;
                modulesMap[moduleName].exports = createMixinProxy(module, moduleName);
            });

        return callback();
    } finally {
        modulesMap["WAWap"].exports = WAWap;
        modulesMap["WASmaxJsx"].exports = WASmaxJsx;
        modulesMap["WASmaxParseUtils"].exports = WASmaxParseUtils;
        modulesMap["WASmaxParseJid"].exports = WASmaxParseJid;
        modulesMap["WASmaxParseReference"].exports = WASmaxParseReference;
        modulesMap["WASmaxAttrs"].exports = WASmaxAttrs;
        modulesMap["WASmaxChildren"].exports = WASmaxChildren;
        modulesMap["WASmaxMixins"].exports = WASmaxMixins;

        Object.keys(originalExports).forEach(moduleName => {
            modulesMap[moduleName].exports = originalExports[moduleName];
        });
    }
}

function withParamsPlaceholder(callback) {
    const paramsProxy = createPropProxy();
    const referenceProxy = createPropProxy();

    for (let i = 0; i < 5_000; i++) {
        try {
            paramsProxy.clear();
            referenceProxy.clear();

            const result = callback(paramsProxy, referenceProxy);
            const skipMixinFailure = !result.success && result.mixin;

            if (skipMixinFailure) {
                skipForcedMixinFailure.add(result.mixin);
                continue;
            }

            skipForcedMixinFailure.clear();

            if (result.error) throw new Error(result.error);
            if (result.success) return paramsProxy.toObject();
            return result;
        } catch (error) {
            if (error === PROP_RETRY_ERROR) continue;

            skipForcedMixinFailure.clear();
            throw error;
        }
    }

    throw new RangeError("Maximum retry attempts exceeded");
}

function convertToSchema(stanza) {
    const metadata = stanza[METADATA_SYMBOL] || {};

    if (metadata.unions?.length > 0) {
        if (metadata.unions.length === 1) {
            const union = metadata.unions[0];
            delete metadata.unions;

            mergeStanzas(stanza, union);

            return convertToSchema(stanza);
        }

        return {
            type: "union",
            namespace: metadata.namespace,
            variant: metadata.variant,
            unions: metadata.unions.map(convertToSchema),
        };
    }

    const schema = {
        type: "node",
        namespace: metadata.namespace,
        variant: metadata.variant,
        tag: stanza.tag,
        attributes: metadata.attrs,
    };

    if (Array.isArray(stanza.content)) {
        const children = stanza.content.map(convertToSchema);

        schema.content = metadata.content ?
            { ...metadata.content, children } :
            children;
    } else {
        schema.content = metadata.content;
    }

    return schema;
}

const SMaxModules = Object.keys(modulesMap)
    .filter(key => /^WASmax(In|Out)/.test(key))
    .map(moduleName => {
        const module = require(moduleName);
        const moduleKeys = Object.keys(module);

        const cleanModuleName = moduleName.replace(/^WASmax(In|Out)|Mixin$/g, "");

        const parserName = moduleKeys.find(key => {
            const cleanParserName = key.replace(/^(parse|make)/, "");
            return moduleName.endsWith(cleanParserName);
        });

        return {
            moduleName: cleanModuleName,
            parserName,
            parser: module[parserName],
        };
    })
    .filter(mod => mod.parser)
    .sort((a, b) => a.moduleName.localeCompare(b.moduleName));

const schemas = withMockedModules(() => {
    console.clear();

    const schemaSpecs = {};

    for (const mod of SMaxModules) {
        if (mod.moduleName !== "GroupsParticipantMixins") continue;

        console.clear();
        console.log(
            `[${Object.keys(schemaSpecs).length}/${SMaxModules.length}]`,
            mod.moduleName,
        );

        const stanza = withParamsPlaceholder(mod.parser);
        assignMetadata(stanza, createModuleName(mod));

        schemaSpecs[mod.moduleName] = convertToSchema(stanza);
    }

    return schemaSpecs;
});

// console.clear();
console.log("SMaxInputSchemas", schemas);