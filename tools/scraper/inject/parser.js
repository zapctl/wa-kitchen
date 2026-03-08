/**
 * Extract WAWeb*Handler*Notification parser modules
 * Extracts only the pure parser instances (WADeprecatedWapParser), not handlers
 */

const STATE_MODULES = new Set([
  "WAComms",
  "WALogger",
  "Promise",
  "asyncToGeneratorRuntime",
  "WAWebUserPrefsMeUser",
  "WAWebABProps",
  "WAWebOfflineHandler",
  "WAWebCurrentUser",
  "WAWebUsernameGatingUtils",
  "WAWebJidToWid",
  "WAWebWidFactory",
  "WAWebBackendApi",
  "WAWebAccountSyncJob",
  "WAWebSignalStoreApi",
  "WAWebSignalCommonUtils",
  "WAWebUserPrefsMultiDevice",
  "WAWebContactTextStatusBridge",
  "WAWebUpdateTextStatusForContact",
  "WAWebMexFetchTextStatusListJob",
  "WAWebMexUsersGetAboutStatus",
  "WAWebGetAboutQueryJob",
  "WAWebBackendEventBus",
  "WAWebQueryBlockListJob",
  "WAWebSetUsernameJob",
  "WAWebWorkerSafeBackendApi",
  "WAWebUserPrefsNotifications",
  "WAWebGetDisappearingModeJob",
  "WAWebUpdateDisappearingModeForContact",
  "WAWebContactSyncLogger",
  "WAWebTextStatusGatingUtils",
  "WAWebMarketingMessagesUserFeedbackGatingUtils",
  "WAWebPDFNTypes",
  "WAWebUserDisclosureCollection",
  "WAWebHandleGroupNotificationV2",
  "WAWebHandleGroupsDirtyNotification",
  "WAWebMessageQueue",
  "WAWebHandleGroupNotificationAction",
  "WAWebHandleGroupNotificationConst",
  "WAWebGroupType",
  "WAWebGroupMemberLinkMode",
  "WAWebSchemaGroupMetadata",
  "WAWebCountriesUtils",
  "WAWebRequestMethodType",
  "WAWebGroupsQueryApi",
  "WAWebEphemeralityUtils",
  "WAWebEphemeralityTypes",
  "getErrorSafe",
  "WAWap",
  "WAWebCommsWapMd",
  "WAWebOfflineDeviceCache",
  "WAWebApiPendingDeviceSync",
  "WAWebAdvHandlerApi",
  "WANullthrows",
]);

function extractModuleRecursively(moduleName, modulesMap, extracted = new Set()) {
  if (extracted.has(moduleName)) return [];
  if (STATE_MODULES.has(moduleName)) return [];

  extracted.add(moduleName);
  const modules = [];

  const mod = modulesMap[moduleName];
  if (!mod || !mod.factory) return modules;

  modules.push({
    name: moduleName,
    deps: mod.deps ? Array.from(mod.deps) : [],
    factory: mod.factory.toString(),
  });

  // Recursively extract dependencies
  if (mod.deps) {
    for (const dep of mod.deps) {
      modules.push(...extractModuleRecursively(dep, modulesMap, extracted));
    }
  }

  return modules;
}

/**
 * Find WADeprecatedWapParser instances in a module's factory code
 * Pattern: new (r("WADeprecatedWapParser"))("name", function)
 */
function findParserInstances(moduleFactory) {
  const parserPattern = /new\s*\(\s*r\(\s*["']WADeprecatedWapParser["']\s*\)\s*\)\s*\(\s*["']([^"']+)["']/g;
  const instances = [];
  let match;

  while ((match = parserPattern.exec(moduleFactory)) !== null) {
    instances.push(match[1]); // parser name
  }

  return instances;
}

async function scrap() {
  const modulesMap = __debug.modulesMap;

  // Find all notification handler modules
  const handlerModuleNames = Object.keys(modulesMap).filter(
    (name) =>
      name.match(/WAWeb.*Handle.*Notification/) || name.match(/WAWeb.*Parser/)
  );

  const modules = [];
  const parsers = [];
  const requiredMocks = new Set();
  const extracted = new Set();

  for (const handlerName of handlerModuleNames) {
    const handlerMod = modulesMap[handlerName];
    if (!handlerMod || !handlerMod.factory) continue;

    // Find parser instances in this handler
    const parserNames = findParserInstances(handlerMod.factory.toString());

    if (parserNames.length === 0) continue; // Skip if no parsers found

    // Extract this module and its dependencies
    const handlerMods = extractModuleRecursively(handlerName, modulesMap, extracted);

    for (const mod of handlerMods) {
      // Track which state modules are needed
      const modDeps = modulesMap[mod.name]?.deps || [];
      for (const dep of modDeps) {
        if (STATE_MODULES.has(dep)) {
          requiredMocks.add(dep);
        }
      }

      if (!modules.some((m) => m.name === mod.name)) {
        modules.push(mod);
      }
    }

    // Register parsers found in this handler
    for (const parserName of parserNames) {
      // Try to find which variable holds the parser instance
      // Pattern: var X = new (...WADeprecatedWapParser)(...); l.parserName = X
      const assignPattern = new RegExp(
        `var\\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*=\\s*new\\s*\\(\\s*r\\(\\s*["']WADeprecatedWapParser["']\\s*\\)\\s*\\)\\s*\\(\\s*["']${parserName}["']`
      );

      const factoryStr = handlerMod.factory.toString();
      const varMatch = assignPattern.exec(factoryStr);
      const varName = varMatch ? varMatch[1] : null;

      // Also check for direct exports pattern: l.parserName = new (...)
      const exportPattern = new RegExp(`l\\.([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*=\\s*new\\s*\\(\\s*r\\(\\s*["']WADeprecatedWapParser["']`);
      const exportMatch = exportPattern.exec(factoryStr);
      const exportName = exportMatch ? exportMatch[1] : parserName;

      if (varName || exportName) {
        parsers.push({
          module: handlerName,
          parserName,
          varName: varName || "T", // fallback common variable name
          exportName,
        });
      }
    }
  }

  // Ensure WADeprecatedWapParser is included
  if (!modules.some((m) => m.name === "WADeprecatedWapParser")) {
    const parserMods = extractModuleRecursively(
      "WADeprecatedWapParser",
      modulesMap,
      extracted
    );
    modules.push(...parserMods);
  }

  return {
    modules: Array.from(new Map(modules.map((m) => [m.name, m])).values()),
    parsers,
    requiredMocks: Array.from(requiredMocks).sort(),
  };
}
