const fs = require("fs");
const path = require("path");

const [, , schemasDir, outputFile] = process.argv;

if (!schemasDir || !outputFile) {
    console.error("Error: Missing arguments");
    process.exit(1);
}

const specs = loadSpecs();

function loadSpecs() {
    return fs.readdirSync(schemasDir)
        .filter(file => file.endsWith(".json"))
        .map(file => path.join(schemasDir, file))
        .map(file => JSON.parse(fs.readFileSync(file, "utf8")));
}

function serializeAttributeType(attr) {
    if (attr.literal) return JSON.stringify(attr.literal);

    switch (attr.type) {
        case "jid":
            return attr.jidTypes?.join(" | ") || "Jid";
        case "enum":
            return attr.enum.map(JSON.stringify).join(" | ");
        case "string":
            return "string";
        case "number":
            return "number";
        case "id":
            return "StanzaId";
        case "call-id":
            return "CallId";
        case "boolean":
            return "boolean";
        default:
            throw new Error(`Unhandled attribute type "${attr.type}"`, { cause: attr });
    }
}

function serializeAttributes(attributes, level) {
    const attrs = Object.entries(attributes || {});
    if (!attrs.length) return;

    const indent = "\t".repeat(level);
    let output = "{";

    attrs.forEach(([name, attr]) => {
        const optional = attr.optional ? "?" : "";
        const type = serializeAttributeType(attr);
        const needsQuotes = /[^a-zA-Z0-9_$]/.test(name) || /^[0-9]/.test(name);
        const formattedName = needsQuotes ? `"${name}"` : name;

        if (output.length === 1) output += "\n";
        output += `${indent}\t${formattedName}${optional}: ${type};\n`;
    });

    if (output.length > 1) output += indent;
    output += `}`;

    return output;
}

function serializeContent(namespace, spec, level) {
    if (!spec) return;

    if (Array.isArray(spec)) {
        const indent = "\t".repeat(level);
        const types = spec.map(val => serializeContent(namespace, val, level + 1));

        return `[\n\t${indent}${types.join(`,\n\t${indent}`)}\n${indent}]`;
    }

    if (spec.$ref) return spec.$ref.replace(":", ".");

    if (spec.variant) {
        namespace[spec.variant] = serializeSpec(namespace, spec, 1);
        return spec.variant;
    }

    switch (spec.type) {
        case "node": {
            const indent = "\t".repeat(level);
            const indentInner = indent + "\t";

            const attrsType = serializeAttributes(spec.attributes, level + 1);
            const contentType = serializeContent(namespace, spec.content, level + 1);

            let output = `{\n`;
            if (spec.tag) output += `${indentInner}tag: "${spec.tag}";\n`;
            if (attrsType) output += `${indentInner}attrs: ${attrsType};\n`;
            if (contentType) output += `${indentInner}content: ${contentType};\n`;
            output += `${indent}}`;
            return output;
        }
        case "union": {
            const unionType = spec.unions
                .map(union => serializeContent(namespace, union, level))
                .join(" | ");

            return unionType;
        }
        case "number": {
            if (spec.literal !== undefined) return spec.literal;

            let type = "number";
            if (spec.min !== undefined) type = `Min<${type}, ${spec.min}>`;
            if (spec.max !== undefined) type = `Max<${type}, ${spec.max}>`;

            return type;
        }
        case "string": {
            if (spec.literal !== undefined) {
                return `"${spec.literal.replace(/"/g, `\\"`)}"`;
            }

            if (spec.enum?.length > 0) {
                return spec.enum
                    .map(v => `"${v.replace(/"/g, `\\"`)}"`)
                    .join(" | ");
            }

            let type = "string";

            if (spec.min !== undefined) type = `Min<${type}, ${spec.min}>`;
            if (spec.max !== undefined) type = `Max<${type}, ${spec.max}>`;

            return type;
        }
        case "binary": {
            if (spec.literal !== undefined) {
                return `Literal<Uint8Array, [${spec.literal.join(", ")}]>`;
            }

            let type = "Uint8Array";
            if (spec.min !== undefined) type = `Min<${type}, ${spec.min}>`;
            if (spec.max !== undefined) type = `Max<${type}, ${spec.max}>`;

            return type;
        }
        default:
            throw new Error(`Unhandled type "${spec.type}"`, { cause: spec });
    }
}

function serializeSpec(namespace, spec, level = 0) {
    const indent = "\t".repeat(level);
    const indentInner = indent + "\t";

    if (spec.$ref) return spec.$ref.replace(":", ".");

    switch (spec.type) {
        case "node": {
            const attrsType = serializeAttributes(spec.attributes, level + 1);
            const contentType = serializeContent(namespace, spec.content, level + 1);

            let output = `${indent}export interface ${spec.variant} {\n`;
            if (spec.tag) output += `${indentInner}tag: "${spec.tag}";\n`;
            if (attrsType) output += `${indentInner}attrs: ${attrsType};\n`;
            if (contentType) output += `${indentInner}content: ${contentType};\n`;
            output += `${indent}}`;
            return output;
        }
        case "union": {
            const unionType = spec.unions
                .map(union => serializeContent(namespace, union, level + 1))
                .join(` |\n${indentInner}`);

            return `${indent}export type ${spec.variant} = \n${indentInner}${unionType};`;
        }
        default:
            throw new Error(`Unhandled type "${spec.type}"`, { cause: spec });
    }
}

function generateTypes() {
    const namespaces = {};

    for (const spec of specs) {
        const namespace = namespaces[spec.namespace] || {};
        namespaces[spec.namespace] = namespace;
        namespace[spec.variant] = serializeSpec(namespace, spec, 1);
    }

    let output = "";

    output += `import type { JID, JID_PAIR, JID_AD } from "../jid";\n`;
    output += `import type { STATUS_JID } from "../jid/commons";\n`;
    output += `import type * as JID_CONSTS from "../jid/constants";\n\n`;

    output += "export type Literal<T, N> = T & { readonly __literal: N };\n";
    output += "export type Min<T, N extends number> = T & { readonly __min: N };\n";
    output += "export type Max<T, N extends number> = T & { readonly __max: N };\n\n";

    output += "export type StanzaId = string & { _?: never };\n";
    output += "export type CallId = string & { _?: never };\n\n";

    output += "export type Jid = JID;\n";
    output += `export type DeviceJid = JID_AD;\n`;
    output += `export type ChatJid = JID_PAIR;\n`;
    output += `export type DomainJid = JID_PAIR<"", string>;\n`;
    output += `export type UserJid = JID_PAIR<string, typeof JID_CONSTS.USER_JID_SUFFIX>;\n`;
    output += `export type LidUserJid = JID_PAIR<string, typeof JID_CONSTS.LID_SUFFIX>;\n`;
    output += `export type BroadcastJid = JID_PAIR<string, typeof JID_CONSTS.BROADCAST_JID_SUFFIX>;\n`;
    output += `export type CallJid = JID_PAIR<string, typeof JID_CONSTS.CALL_JID_SUFFIX>;\n`;
    output += `export type GroupJid = JID_PAIR<string, typeof JID_CONSTS.GROUP_JID_SUFFIX>;\n`;
    output += `export type NewsletterJid = JID_PAIR<string, typeof JID_CONSTS.NEWSLETTER_JID_SUFFIX>;\n`;
    output += `export type StatusJid = JID_PAIR<typeof STATUS_JID.user, typeof STATUS_JID.server>;\n\n`;

    for (const [name, specs] of Object.entries(namespaces)) {
        output += `export namespace ${name} {\n`;
        output += Object.values(specs).join("\n\n");
        output += `\n}\n\n`;
    }

    return output.trim();
}

const output = generateTypes();

fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated ${outputFile}`);