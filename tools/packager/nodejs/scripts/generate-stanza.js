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
            return attr.enum.map(JSON.stringify).join("|") || "never";
        case "string":
            return "string";
        case "number":
            return "number";
        case "id":
            return "string";
        case "call-id":
            return "string";
        case "boolean":
            return "boolean";
        case "binary":
            return "Uint8Array";

        case "undefined": // FIXME
            return "undefined";

        default:
            throw new Error(`Unhandled attribute type "${attr.type}"`);
    }
}

function serializeAttributes(attributes, level) {
    const indent = "\t".repeat(level);
    let output = "{";

    Object.entries(attributes || {}).forEach(([name, attr]) => {
        const optional = attr.optional ? "?" : "";
        const type = serializeAttributeType(attr);

        if (output.length === 1) output += "\n";
        output += `${indent}\t${name}${optional}: ${type};\n`;
    });

    if (output.length > 1) output += indent;
    output += `}`;

    return output;
}

function serializeContent(namespace, spec, level) {
    if (!spec) return "null";

    if (Array.isArray(spec)) {
        const indent = "\t".repeat(level);
        const types = spec.map(val => serializeContent(namespace, val, level));

        return `[${types.join(`,\n${indent}`)}]`;
    }

    if (spec.$ref) return spec.$ref.replace(":", ".");
    // if (spec.as) return spec.literal;
    // if (spec.literal) return spec.literal;
    // if (spec.enum) return spec.literal;
    // if (spec.min) return spec.literal;
    // if (spec.max) return spec.literal;

    switch (spec.type) {
        case "node": {
            if (spec.variant) {
                namespace.push(serializeSpec(namespace, spec, 1));

                return spec.variant;
            }

            const indent = "\t".repeat(level);
            const indentInner = indent + "\t";

            const attrsType = serializeAttributes(spec.attributes, level + 1);
            const contentType = serializeContent(namespace, spec.content, level + 1);

            let output = `{\n`;
            if (spec.tag) output += `${indentInner}tag: "${spec.tag}";\n`;
            output += `${indentInner}attrs: ${attrsType};\n`;
            if (spec.content) output += `${indentInner}content: ${contentType};\n`;
            output += `${indent}}`;
            return output;
        }
        case "union": {
            const nodes = spec.unions.filter(node => node.type === "node");
            const unions = spec.unions.filter(node => node.type === "union");

            const indent = "\t".repeat(level);

            const unionType = spec.unions
                .map(union => serializeContent(namespace, union, level + 1))
                .map(type => type.replace(`${spec.namespace}.`, ""))
                .join(" | ") || "never";

            return `${indent}export type ${spec.variant} = ${unionType};`;
        }
        case "number":
            // literal
            return "Uint8Array";
        case "string":
            // TODO: min, max, literal, enum
            return "Uint8Array";
        case "binary":
            // TODO: min, max, literal
            return "Uint8Array";
        default:
            throw new Error(`Unhandled type "${spec.type}"`);
    }
}

function serializeSpec(namespace, spec, level = 0) {
    const indent = "\t".repeat(level);
    const indentInner = indent + "\t";

    switch (spec.type) {
        case "node": {
            const attrsType = serializeAttributes(spec.attributes, level + 1);
            const contentType = serializeContent(namespace, spec.content, level + 1);

            let output = `${indent}export interface ${spec.variant} {\n`;
            if (spec.tag) output += `${indentInner}tag: "${spec.tag}";\n`;
            output += `${indentInner}attrs: ${attrsType};\n`;
            if (spec.content) output += `${indentInner}content: ${contentType};\n`;
            output += `${indent}}`;
            return output;
        }
        case "union": {
            const unionType = spec.unions
                .map(union => serializeContent(namespace, union, level + 1))
                .map(type => type.replace(`${spec.namespace}.`, ""))
                .join(` |\n${indentInner}`);

            return `${indent}export type ${spec.variant} = \n${indentInner}${unionType};`;
        }
        default:
            throw new Error(`Unhandled type "${spec.type}"`);
    }
}

function generateTypes() {
    const namespaces = {};

    for (const spec of specs) {
        const namespace = namespaces[spec.namespace] || [];
        namespaces[spec.namespace] = namespace;

        namespace.push(serializeSpec(namespace, spec, 1));
    }

    let output = "";

    output += "export type Jid = string;\n";
    output += "export type UserJid = string;\n";
    output += "export type DomainJid = string;\n";
    output += "export type LidUserJid = string;\n";
    output += "export type BroadcastJid = string;\n";
    output += "export type DeviceJid = string;\n";
    output += "export type CallJid = string;\n";
    output += "export type GroupJid = string;\n";
    output += "export type StatusJid = string;\n";
    output += "export type ChatJid = string;\n";
    output += "export type NewsletterJid = string;\n";
    output += "\n";

    for (const [name, specs] of Object.entries(namespaces)) {
        output += `export namespace ${name} {\n`;
        output += specs.join("\n\n");
        output += `\n}\n\n`;
    }

    return output;
}

const output = generateTypes();

fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated ${outputFile}`);