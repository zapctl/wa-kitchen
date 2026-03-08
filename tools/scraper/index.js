import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IS_DEBUG = process.env.NODE_ENV !== "production";
const OUT_DIR = process.env.OUT_DIR || "./out";

const VERSION_PATH = path.join(OUT_DIR, ".version");
const CHECKSUM_PATH = path.join(OUT_DIR, ".checksum");
const UTILS_SCRIPT_PATH = path.join(__dirname, "inject/utils.js");

const SCRAPERS = [
    // { name: "version", type: "json", outputPath: "version.json" },
    // { name: "main", type: "json", outputPath: "main.json" },
    // { name: "binary", type: "json", outputPath: "binary.json" },
    // { name: "media", type: "json", outputPath: "media.json" },
    // { name: "jid", type: "json", outputPath: "jid.json" },
    // { name: "newsletter", type: "json", outputPath: "newsletter.json" },
    // { name: "chat", type: "json", outputPath: "chat.json" },
    // { name: "group", type: "json", outputPath: "group.json" },
    // { name: "privacy", type: "json", outputPath: "privacy.json" },
    // { name: "message", type: "json", outputPath: "message.json" },
    // { name: "protobuf", type: "multi-file", outputDir: "protobuf", extension: "proto" },
    // { name: "graphql", type: "multi-json", outputDir: "graphql", extension: "json" },
    { name: "rpc", type: "multi-file", outputDir: "rpc", extension: "js" },
    // { name: "parser", type: "json", outputPath: "parser.json" },
    // IS_DEBUG && { name: "smax", type: "multi-file", outputDir: "smax", extension: "js" },
].filter(Boolean);

const browser = await puppeteer.launch({
    headless: !IS_DEBUG,
    devtools: IS_DEBUG,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const [page] = await browser.pages();

await page.setUserAgent({
    userAgent: (await browser.userAgent()).replace("HeadlessChrome", "Chrome"),
});

const utilsScriptContent = await fs.readFile(UTILS_SCRIPT_PATH, "utf8");
await page.evaluateOnNewDocument(utilsScriptContent);

await page.goto("https://web.whatsapp.com/", {
    waitUntil: "networkidle2",
});

const results = {};
const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;

for (const scraper of SCRAPERS) {
    const scriptPath = path.join(__dirname, "inject", `${scraper.name}.js`);
    const scriptContent = await fs.readFile(scriptPath, "utf8");
    const scriptFunction = new AsyncFunction("scrap", scriptContent);

    results[scraper.name] = await page.evaluate(scriptFunction);
}

if (!IS_DEBUG) await browser.close();

await fs.rm(OUT_DIR, { recursive: true }).catch(() => { });
await fs.mkdir(OUT_DIR);

const globalHash = createHash("sha256");

async function saveEntry(basePath, name, content, scraper) {
    if (typeof content === "object" && content !== null) {
        const folderPath = path.join(basePath, name);
        await fs.mkdir(folderPath, { recursive: true });

        const entries = Object.entries(content).sort(([a], [b]) => a.localeCompare(b));

        await Promise.all(entries.map(([key, value]) =>
            saveEntry(folderPath, key, value, scraper)
        ));
    } else {
        const filePath = path.join(basePath, `${name}.${scraper.extension}`);

        let fileContent = typeof content === "string" ?
            content :
            JSON.stringify(content, null, 2);

        globalHash.update(fileContent);
        return fs.writeFile(filePath, fileContent);
    }
}

for (const scraper of SCRAPERS) {
    const data = results[scraper.name];

    const outputPath = scraper.outputPath ? path.join(OUT_DIR, scraper.outputPath) : null;
    const outputDir = scraper.outputDir ? path.join(OUT_DIR, scraper.outputDir) : null;
    const targetDir = outputDir ?? path.dirname(outputPath);

    await fs.mkdir(targetDir, { recursive: true });

    if (scraper.type === "text") {
        globalHash.update(data);
        await fs.writeFile(outputPath, data);
    } else if (scraper.type === "json") {
        const content = JSON.stringify(data, null, 2);
        await fs.writeFile(outputPath, content);

        if (scraper.name === "version") {
            await fs.writeFile(VERSION_PATH, data.constants.VERSION);
            continue;
        }

        globalHash.update(content);
    } else if (scraper.type === "multi-file" || scraper.type === "multi-json") {
        const entries = Object.entries(data).sort(([a], [b]) => a.localeCompare(b));

        await Promise.all(entries.map(([name, content]) =>
            saveEntry(outputDir, name, content, scraper)
        ));
    }
}

const checksum = globalHash.digest("hex");
await fs.writeFile(CHECKSUM_PATH, checksum);