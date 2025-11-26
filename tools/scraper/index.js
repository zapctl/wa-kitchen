import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IS_DEBUG = process.env.NODE_ENV === "development";
const OUT_DIR = process.env.OUT_DIR || "./out";

const SCRAPERS = [
    { name: "version", type: "text", outputPath: ".version" },
    { name: "binary", type: "json", outputPath: "binary.json" },
    { name: "jid", type: "json", outputPath: "jid.json" },
    { name: "message", type: "json", outputPath: "message.json" },
    { name: "protobuf", type: "multi-file", outputDir: "protobuf", extension: ".proto" },
    { name: "graphql", type: "multi-json", outputDir: "graphql", extension: ".json" },
];

const browser = await puppeteer.launch({
    headless: !IS_DEBUG,
    devtools: IS_DEBUG,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const [page] = await browser.pages();

await page.setUserAgent((await browser.userAgent())
    .replace("HeadlessChrome", "Chrome"));

await page.goto("https://web.whatsapp.com/", {
    waitUntil: "networkidle2",
});

const results = {};

for (const scraper of SCRAPERS) {
    const scriptPath = path.join(__dirname, "inject", `${scraper.name}.js`);
    const scriptContent = await fs.readFile(scriptPath, "utf8");
    const scriptFunction = new Function("scrap", scriptContent);

    results[scraper.name] = await page.evaluate(scriptFunction);
}

if (!IS_DEBUG) await browser.close();

await fs.rm(OUT_DIR, { recursive: true }).catch(() => { });
await fs.mkdir(OUT_DIR);

for (const scraper of SCRAPERS) {
    const data = results[scraper.name];

    const outputPath = scraper.outputPath ? path.join(OUT_DIR, scraper.outputPath) : null;
    const outputDir = scraper.outputDir ? path.join(OUT_DIR, scraper.outputDir) : null;
    const targetDir = outputDir ?? path.dirname(outputPath);

    await fs.mkdir(targetDir, { recursive: true });

    if (scraper.type === "text") {
        await fs.writeFile(outputPath, data);
    } else if (scraper.type === "json") {
        await fs.writeFile(outputPath, JSON.stringify(data, null, 2));
    } else if (scraper.type === "multi-file") {
        await Promise.all(Object.entries(data).map(([name, content]) => {
            const filePath = path.join(outputDir, `${name}${scraper.extension}`);
            return fs.writeFile(filePath, content);
        }));
    } else if (scraper.type === "multi-json") {
        await Promise.all(Object.entries(data).map(([name, content]) => {
            const filePath = path.join(outputDir, `${name}${scraper.extension}`);
            return fs.writeFile(filePath, JSON.stringify(content, null, 2));
        }));
    }
}