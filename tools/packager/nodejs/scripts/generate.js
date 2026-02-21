const fs = require("fs");

const [, , inputJsonFile, outputFile] = process.argv;

if (!inputJsonFile || !outputFile) {
    console.error("Error: Missing arguments");
    process.exit(1);
}

const specs = JSON.parse(fs.readFileSync(inputJsonFile, "utf8"));

function toSnakeCase(value) {
    return value.replace(/([a-z])(?=[A-Z])/g, '$1_').toUpperCase();
}

function toPascalCase(value) {
    return toSnakeCase(value)
        .toLowerCase()
        .replace(/-/g, "_")
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
        .replace(/Whatsapp/g, "WhatsApp");
}

function serializePropName(name, value) {
    if (/^[0-9]/.test(name) && typeof value === "string") {
        const firstChar = value.charAt(0);

        let prefix = "_";
        if (!/^[0-9]/.test(firstChar)) prefix = firstChar;

        name = prefix.toUpperCase() + name;
    }

    const needsQuotes = /[^a-zA-Z0-9_$]/.test(name);

    return needsQuotes ? `"${name}"` : name;
}

function serializeValue(value) {
    if (Array.isArray(value)) return `[${value.map(val => `"${val}"`).join(", ")}]`;
    else if (typeof value === "string") return `"${value}"`;
    else if (typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value);
}

function generateConstants() {
    let output = "";

    for (const [name, value] of Object.entries(specs.constants || {})) {
        const propName = serializePropName(toSnakeCase(name));
        const propValue = serializeValue(value);

        output += `export const ${propName} = ${propValue};\n`;
    }

    return output;
}

function generateUnions() {
    let output = "";

    for (const [name, spec] of Object.entries(specs.unions || {})) {
        const unionName = serializePropName(toPascalCase(name));
        const unionValue = spec.map(serializePropName).join(" |\n\t");

        output += `export type ${unionName} = \n\t${unionValue};\n\n`;
    }

    return output;
}

function generateEnums() {
    let output = "";

    for (const [name, spec] of Object.entries(specs.enums || {})) {
        const enumName = serializePropName(toPascalCase(name));
        output += `export enum ${enumName} {\n`;

        for (const [prop, value] of Object.entries(spec)) {
            const propName = serializePropName(toPascalCase(prop), value);
            const propValue = serializeValue(value);

            output += `\t${propName} = ${propValue},\n`;
        }

        output += "}\n\n";
    }

    return output;
}

let output = "";

output += generateConstants();
output += generateUnions();
output += generateEnums();

if (fs.existsSync(outputFile)) {
    output += "\n" + fs.readFileSync(outputFile, "utf8");
}

output = output.trim();

fs.writeFileSync(outputFile, output, "utf8");