const fs = require("fs");

const [, , inputJsonFile, outputFile] = process.argv;

if (!inputJsonFile || !outputFile) {
    console.error("Error: Missing arguments");
    process.exit(1);
}

const specs = JSON.parse(fs.readFileSync(inputJsonFile, "utf8"));

function generateConstants() {
    let output = "";

    for (const [name, value] of Object.entries(specs.constants)) {
        const valueStr = Array.isArray(value) ?
            `[${value.map(val => `"${val}"`).join(", ")}]` :
            `"${value}"`;

        output += `export const ${name} = ${valueStr};\n`;
    }

    return output;
}

function generateEnums() {
    let output = "";

    for (const [name, enumSpec] of Object.entries(specs.enums)) {
        output += `export enum ${name} {\n`;

        for (const [prop, value] of Object.entries(enumSpec)) {
            output += `\t${prop} = ${value},\n`;
        }

        output += "}";
    }

    return output;
}

let output = generateConstants() + "\n";
output += generateEnums();

fs.writeFileSync(outputFile, output, "utf8");