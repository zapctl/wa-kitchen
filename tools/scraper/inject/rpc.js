const WABootloader = require("Bootloader");

async function preloadAllModules() {
  if (window.__onBeforeModuleFactory) return;

  ErrorGuard.skipGuardGlobal(true);

  for (let i = 0; i < 15; i++) {
    const bootloadedMap = Array.from(WABootloader.__debug.bootloaded.keys());
    const componentMap = Array.from(WABootloader.__debug.componentMap.keys());
    const preloadMap = componentMap.filter(name => !bootloadedMap.includes(name));

    if (bootloadedMap.length >= componentMap.length) break;

    await Promise.race([
      new Promise((resolve) => WABootloader.loadModules(preloadMap, resolve, "")),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]);

    console.log(`Preloaded ${preloadMap.length} modules`);
  }

  ErrorGuard.skipGuardGlobal(false);
}

function wrapDependency(moduleMap) {
  let code = "";

  code += `const map = { id: "${moduleMap.id}" };\n`;
  code += `const exports = module.exports = {};\n`;
  code += `const dependencies = {${moduleMap.dependencies
    .map(dep => `"${dep.id}": require("./${dep.id}.js")`)
    .join(",")}};\n`;
  code += `const requireModule = (name) => dependencies[name];\n`;
  code += `const requireModuleDefault = (name) => dependencies[name].default;\n\n`;

  code += `(${moduleMap.factory.toString()})\n`;
  code += "(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);"

  return code;
}

function wrapModule(moduleMap) {
  const sendName = Object.keys(moduleMap.exports).find(key => /^send.*RPC$/.test(key));

  let code = "";

  code += `const map = { id: "${moduleMap.id}" };\n`;
  code += `const exports = {};\n`;
  code += `const dependencies = {${moduleMap.dependencies
    .map(dep => `"${dep.id}": require("./dependencies/${dep.id}.js")`)
    .join(",")}};\n`;
  code += `const requireModule = (name) => dependencies[name];\n`;
  code += `const requireModuleDefault = (name) => dependencies[name].default;\n\n`;

  code += `(${moduleMap.factory.toString()})\n`;
  code += "(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);\n\n"

  code += `module.exports = {"${sendName}": exports["${sendName}"]};`;

  return code;
}

function getSMaxRPCModules() {
  const modulesMap = require("__debug").modulesMap;

  return Object.keys(modulesMap)
    .filter(key => /^WASmax.*RPC/.test(key))
    .map(moduleName => {
      const module = require(moduleName);
      const moduleMap = modulesMap[moduleName];
      const hasSend = Object.keys(module).some(key => /^send.*RPC$/.test(key));

      if (!hasSend) return;
      return moduleMap;
    })
    .filter(Boolean)
    .sort((a, b) => a.id.localeCompare(b.id));
}

function wrapModuleDependencies(codes, moduleMap) {
  for (const depMap of moduleMap.dependencies) {
    if (depMap.id in codes) continue;

    wrapModuleDependencies(codes, depMap);

    codes[depMap.id] = wrapDependency(depMap);
  }
}

function getModuleCodes() {
  const modules = getSMaxRPCModules();
  const codes = { dependencies: {} };

  for (const mod of modules) {
    const cleanModuleName = mod.id.replace(/^WASmax|RPC$/g, "");
    wrapModuleDependencies(codes.dependencies, mod);

    codes[cleanModuleName] = wrapModule(mod);
  }

  return codes;
}

await preloadAllModules();
const codes = getModuleCodes();

console.log("SMaxRPCCodes", codes);

return codes;