const fs = require("fs");

const [, , inputJsonFile, outputFile] = process.argv;

if (!inputJsonFile || !outputFile) {
    console.error("Error: Missing arguments");
    process.exit(1);
}

const specs = JSON.parse(fs.readFileSync(inputJsonFile, "utf8"));

function serializeValue(value) {
    if (Array.isArray(value)) return `[${value.map(val => `"${val}"`).join(", ")}]`;
    else if (typeof value === "string") return `"${value}"`;
    return String(value);
}

function generateConstants() {
    let output = "";

    for (const [name, value] of Object.entries(specs.constants || {})) {
        output += `export const ${name} = ${serializeValue(value)};\n`;
    }

    return output;
}

function generateEnums() {
    let output = "";

    for (const [name, enumSpec] of Object.entries(specs.enums || {})) {
        output += `export enum ${name} {\n`;

        for (const [prop, value] of Object.entries(enumSpec)) {
            output += `\t${prop} = ${serializeValue(value)},\n`;
        }

        output += "}\n\n";
    }

    return output;
}

let output = generateConstants() + "\n";
output += generateEnums();
output = output.trim();

fs.writeFileSync(outputFile, output, "utf8");