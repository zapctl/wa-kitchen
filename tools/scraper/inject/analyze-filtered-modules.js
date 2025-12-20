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

// Filtra os módulos (mesma lógica do filter-smax-modules.js)
function isLeafModule(moduleName) {
    const cleanName = moduleName.replace(/^WASmaxIn/, "");

    // Exclui:
    // - "Mixin" em qualquer lugar
    // - "Error" em qualquer lugar
    // - Termina em: Errors, Enums, Types, Ids
    const excludePattern = /Mixin|Error|(Errors|Enums|Types|Ids)$/;

    if (excludePattern.test(cleanName)) {
        return false;
    }

    // Módulos muito usados provavelmente são intermediários
    const usageCount = usedBy.get(moduleName)?.length || 0;
    if (usageCount > 2) {
        return false;
    }

    return true;
}

const filteredModules = allFiles.filter(isLeafModule);

// Analisa os módulos filtrados
const analysis = filteredModules.map(moduleName => {
    const deps = dependencies.get(moduleName) || [];
    const users = usedBy.get(moduleName) || [];

    return {
        name: moduleName.replace(/^WASmaxIn/, ""),
        fullName: moduleName,
        dependencies: deps.length,
        usedBy: users.length,
        deps: deps,
        users: users
    };
});

// Ordena por número de vezes que é usado (descendente)
analysis.sort((a, b) => b.usedBy - a.usedBy);

console.log("\n=== ANÁLISE DOS MÓDULOS FILTRADOS ===\n");
console.log(`Total de módulos filtrados: ${filteredModules.length}\n`);

// Mostra os top 20 mais usados (suspeitos de serem intermediários)
console.log("=== TOP 20 MAIS USADOS (Suspeitos de serem intermediários) ===\n");
analysis.slice(0, 20).forEach(mod => {
    console.log(`${mod.name}`);
    console.log(`  Usado por: ${mod.usedBy} módulos`);
    console.log(`  Depende de: ${mod.dependencies} módulos`);
    if (mod.usedBy > 0) {
        console.log(`  Usado por: ${mod.users.slice(0, 3).map(u => u.replace(/^WASmaxIn/, "")).join(", ")}${mod.users.length > 3 ? "..." : ""}`);
    }
    console.log();
});

// Identifica padrões suspeitos nos nomes
console.log("\n=== PADRÕES SUSPEITOS NOS NOMES ===\n");

const patterns = [
    { name: "ClientErrors", regex: /ClientErrors?$/i },
    { name: "ServerErrors", regex: /ServerErrors?$/i },
    { name: "NoRetryError", regex: /NoRetryError/i },
    { name: "Common...", regex: /Common[A-Z]/i },
    { name: "Base...", regex: /Base[A-Z]/i },
    { name: "...Types", regex: /Types$/i },
    { name: "...Enums", regex: /Enums$/i },
    { name: "...Ids", regex: /Ids$/i },
];

patterns.forEach(pattern => {
    const matches = analysis.filter(mod => pattern.regex.test(mod.name));
    if (matches.length > 0) {
        console.log(`${pattern.name}: ${matches.length} módulos`);
        matches.slice(0, 5).forEach(mod => {
            console.log(`  - ${mod.name} (usado por: ${mod.usedBy})`);
        });
        if (matches.length > 5) {
            console.log(`  ... e mais ${matches.length - 5}`);
        }
        console.log();
    }
});

// Salva análise completa
const fullAnalysis = {
    totalModules: filteredModules.length,
    topUsed: analysis.slice(0, 50).map(m => ({
        name: m.name,
        usedBy: m.usedBy,
        dependencies: m.dependencies
    })),
    patternMatches: {}
};

patterns.forEach(pattern => {
    const matches = analysis.filter(mod => pattern.regex.test(mod.name));
    fullAnalysis.patternMatches[pattern.name] = matches.map(m => m.name);
});

fs.writeFileSync(
    path.join(__dirname, "../../../out/smax-analysis.json"),
    JSON.stringify(fullAnalysis, null, 2)
);

console.log("\n✓ Análise completa salva em out/smax-analysis.json");
