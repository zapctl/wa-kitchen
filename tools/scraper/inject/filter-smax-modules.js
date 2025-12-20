import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SMAX_DIR = path.join(__dirname, "../../../out/smax");

// Lê todos os arquivos .js no diretório smax
const allFiles = fs
    .readdirSync(SMAX_DIR)
    .filter(file => file.startsWith("WASmaxIn") && file.endsWith(".js"))
    .map(file => file.replace(".js", ""));

// Mapa de dependências: módulo -> [módulos que ele usa]
const dependencies = new Map();

// Mapa reverso: módulo -> [módulos que o usam]
const usedBy = new Map();

// Analisa as dependências de cada módulo
allFiles.forEach(moduleName => {
    const filePath = path.join(SMAX_DIR, `${moduleName}.js`);
    const content = fs.readFileSync(filePath, "utf8");

    // Extrai a primeira linha de comentário com as dependências
    const match = content.match(/\/\/ Dependencies: (.+)/);
    if (match) {
        const deps = match[1]
            .split(", ")
            .filter(dep => dep.startsWith("WASmaxIn"));

        dependencies.set(moduleName, deps);

        // Atualiza o mapa reverso
        deps.forEach(dep => {
            if (!usedBy.has(dep)) {
                usedBy.set(dep, []);
            }
            usedBy.get(dep).push(moduleName);
        });
    } else {
        dependencies.set(moduleName, []);
    }
});

// Modo de filtragem:
// - 'default': Mantém estruturas auxiliares (Configs, StateSource, etc.)
// - 'strict': Remove também estruturas auxiliares, mantendo apenas Response/Request/Notification
const FILTER_MODE = process.env.FILTER_MODE || 'default';

// Filtra os módulos usando regex
const leafModules = allFiles.filter(moduleName => {
    const cleanName = moduleName.replace(/^WASmaxIn/, "");

    // Exclui:
    // - "Mixin" em qualquer lugar
    // - "Error" em qualquer lugar
    // - Termina em: Errors, Enums, Types, Ids
    const excludePattern = /Mixin|Error|(Errors|Enums|Types|Ids)$/;

    if (excludePattern.test(cleanName)) {
        return false;
    }

    // Módulos muito usados provavelmente são intermediários (threshold: <= 2)
    const usageCount = usedBy.get(moduleName)?.length || 0;
    if (usageCount > 2) {
        return false;
    }

    // Modo STRICT: Apenas endpoints finais
    if (FILTER_MODE === 'strict') {
        const endpointPattern = /Response|Request|Notification|(Success|Ack|Nack)$/;
        if (!endpointPattern.test(cleanName)) {
            return false;
        }
    }

    return true;
});

// Ordena alfabeticamente
leafModules.sort();

// Remove o prefixo "WASmaxIn" para comparação com a lista original
const cleanLeafModules = leafModules.map(name => name.replace(/^WASmaxIn/, ""));

console.log("Total de módulos:", allFiles.length);
console.log("Módulos da ponta:", leafModules.length);
console.log("\nMódulos finais:");
console.log(JSON.stringify(cleanLeafModules, null, 2));

// Salva o resultado
fs.writeFileSync(
    path.join(__dirname, "../../../out/smax-leaf-modules.json"),
    JSON.stringify(cleanLeafModules, null, 2)
);

console.log("\n✓ Lista salva em out/smax-leaf-modules.json");
