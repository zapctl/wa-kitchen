#!/usr/bin/env node

/**
 * Generate RPC and Parser modules from extracted JSON
 * Reads: out/rpc.json, out/parser.json
 * Outputs: out/dist/nodejs/rpc/loader.ts, modules.js, mocks.js, index.ts
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, "../../..");
const OUT_DIR = path.join(PROJECT_ROOT, "out");
const DIST_DIR = path.join(PROJECT_ROOT, "tools/packager/nodejs/out/dist/nodejs");
const RPC_DIST = path.join(DIST_DIR, "rpc");
const ASSETS_DIR = path.join(PROJECT_ROOT, "tools/packager/nodejs/assets");

async function readJSON(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function sanitizeFactory(factoryStr) {
  // Remove comments and clean up
  return factoryStr.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*/g, "");
}

async function main() {
  console.log("[RPC] Reading extracted data...");

  const rpcData = await readJSON(path.join(OUT_DIR, "rpc.json"));
  const parserData = await readJSON(path.join(OUT_DIR, "parser.json"));

  if (!rpcData && !parserData) {
    console.warn("[RPC] No rpc.json or parser.json found. Skipping generation.");
    return;
  }

  // Create output directory
  await fs.mkdir(RPC_DIST, { recursive: true });

  // Copy loader from assets
  console.log("[RPC] Copying loader.ts...");
  const loaderSource = path.join(ASSETS_DIR, "rpc/loader.ts");
  const loaderDest = path.join(RPC_DIST, "loader.ts");
  try {
    await fs.copyFile(loaderSource, loaderDest);
  } catch {
    console.warn(
      "[RPC] loader.ts not found in assets. Will create minimal version."
    );
  }

  // Generate modules.js (all extracted modules in __d format)
  console.log("[RPC] Generating modules.js...");
  const modulesList = [];
  if (rpcData?.modules) modulesList.push(...rpcData.modules);
  if (parserData?.modules) modulesList.push(...parserData.modules);

  // Deduplicate by name
  const modulesMap = new Map();
  for (const mod of modulesList) {
    if (!modulesMap.has(mod.name)) {
      modulesMap.set(mod.name, mod);
    }
  }

  let modulesJS = "// Auto-generated — do not edit\n\n";
  for (const [name, mod] of modulesMap) {
    const depsStr = JSON.stringify(mod.deps || []);
    const factory = sanitizeFactory(mod.factory);
    modulesJS += `__d("${name}", ${depsStr}, ${factory});\n\n`;
  }

  await fs.writeFile(path.join(RPC_DIST, "modules.js"), modulesJS);

  // Generate mocks.js (state module mocks - already in loader.ts as __d calls)
  console.log("[RPC] Mocks are included in loader.ts");

  // Generate index.ts (TypeScript wrappers)
  console.log("[RPC] Generating index.ts...");
  let indexTS = `// Auto-generated — do not edit

import { __d, withContext, _getContext, _getRequire } from './loader';
import './modules';

const _require = _getRequire();

export interface RpcContext {
  comms: {
    sendSmaxStanza(stanza: unknown, opts?: unknown): Promise<unknown>;
  };
  selfJid?: unknown;
}

export interface ParserContext {
  selfJid?: unknown;
}

`;

  // Add RPC wrappers
  if (rpcData?.rpcs) {
    for (const rpc of rpcData.rpcs) {
      const funcName = rpc.exports?.[0] || `send${rpc.name.replace(/RPC$/, "")}`;
      indexTS += `/**
 * Calls ${rpc.name}.${funcName}
 */
export async function ${funcName}(
  ctx: RpcContext,
  params?: unknown
): Promise<unknown> {
  return withContext(ctx, () => {
    const mod = _require("${rpc.name}");
    return mod.${funcName}(params);
  });
}

`;
    }
  }

  // Add Parser wrappers
  if (parserData?.parsers) {
    for (const parser of parserData.parsers) {
      const exportName = parser.exportName || "T";
      // Normalize function name from parser name: groupNotificationParser -> parseGroupNotification
      const funcName =
        "parse" +
        parser.parserName
          .replace(/Parser$/, "")
          .replace(/^(\w)/, (c) => c.toUpperCase())
          .replace(/([A-Z])/g, "$1");

      indexTS += `/**
 * Parses ${parser.parserName} from ${parser.module}
 */
export function ${funcName}(
  xml: unknown,
  ctx: ParserContext
): unknown {
  return withContext(ctx, () => {
    const mod = _require("${parser.module}");
    return mod.${exportName}.parse(xml);
  });
}

`;
    }
  }

  await fs.writeFile(path.join(RPC_DIST, "index.ts"), indexTS);

  console.log("[RPC] ✓ Generated:");
  console.log(`  - ${path.relative(PROJECT_ROOT, loaderDest)}`);
  console.log(`  - ${path.relative(PROJECT_ROOT, path.join(RPC_DIST, "modules.js"))}`);
  console.log(`  - ${path.relative(PROJECT_ROOT, path.join(RPC_DIST, "index.ts"))}`);

  if (rpcData?.rpcs?.length > 0) {
    console.log(`  RPCs: ${rpcData.rpcs.length}`);
  }
  if (parserData?.parsers?.length > 0) {
    console.log(`  Parsers: ${parserData.parsers.length}`);
  }
}

main().catch((err) => {
  console.error("[RPC] Error:", err.message);
  process.exit(1);
});
