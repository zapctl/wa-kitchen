/**
 * Mini-runtime for executing WA modules extracted from the web bundle
 * Supports the __d(name, deps, factory) format from WA's Bootloader
 */

// Babel helpers shim
export const babelHelpers = {
  extends: Object.assign,
  taggedTemplateLiteralLoose: (strings: readonly string[]): readonly string[] => strings,
};

// Module registry and cache
const _registry = new Map<string, Function>();
const _cache = new Map<string, any>();
let _currentContext: any = null;

/**
 * Module definition function (mimic WA's __d)
 * Registers a module with its dependencies and factory
 */
export function __d(
  name: string,
  deps: string[],
  factory: (t: any, n: any, r: any, o: any, a: any, i: any, l: any) => void
): void {
  _registry.set(name, factory);
}

/**
 * Require a module - executes factory if not cached
 */
function _require(name: string): any {
  if (_cache.has(name)) {
    return _cache.get(name);
  }

  const factory = _registry.get(name);
  if (!factory) {
    throw new Error(`Module "${name}" not found in registry`);
  }

  const exports: any = {};
  _cache.set(name, exports);

  // Call factory with require function and exports
  // Convention: (t, n, r, o, a, i, l) where n,r,o,a,i are all require and l is exports
  factory(_require, _require, _require, _require, _require, _require, exports);

  return exports;
}

/**
 * Execute function with injected context
 * Context is available to mocks via _currentContext
 */
export function withContext<T>(ctx: any, fn: () => T): T {
  _currentContext = ctx;
  try {
    return fn();
  } finally {
    _currentContext = null;
  }
}

/**
 * Get current context (used by mocks)
 */
export function _getContext(): any {
  return _currentContext;
}

/**
 * Clear all caches (useful for testing)
 */
export function _clearCache(): void {
  _cache.clear();
}

/**
 * Get require function for external use
 */
export function _getRequire(): typeof _require {
  return _require;
}

// Register mock modules
__d("babelHelpers", [], (t, n, r, o, a, i, l) => {
  Object.assign(l, babelHelpers);
});

// asyncToGeneratorRuntime - native implementation
__d("asyncToGeneratorRuntime", [], (t, n, r, o, a, i, l) => {
  l.asyncToGenerator = (fn: Function) => function (...args: any[]) {
    return fn.apply(this, args);
  };
});

// Promise - delegate to global
__d("Promise", [], (t, n, r, o, a, i, l) => {
  l.default = globalThis.Promise;
  Object.assign(l, globalThis.Promise);
});

// State module mocks - use _currentContext for lazy configuration
__d("WAComms", [], (t, n, r, o, a, i, l) => {
  l.sendSmaxStanza = (stanza: any, opts?: any) => {
    const ctx = _getContext();
    if (!ctx?.comms?.sendSmaxStanza) {
      throw new Error("WAComms.sendSmaxStanza not configured in context");
    }
    return ctx.comms.sendSmaxStanza(stanza, opts);
  };
});

__d("WAWebUserPrefsMeUser", [], (t, n, r, o, a, i, l) => {
  l.getMeDevicePnOrThrow = () => {
    const ctx = _getContext();
    if (!ctx?.selfJid) {
      throw new Error("selfJid not configured in context");
    }
    return ctx.selfJid;
  };

  l.getMePnUserOrThrow = () => {
    const ctx = _getContext();
    if (!ctx?.selfJid) {
      throw new Error("selfJid not configured in context");
    }
    return ctx.selfJid;
  };

  l.getMeLidUserOrThrow = () => {
    const ctx = _getContext();
    if (!ctx?.selfJid) {
      throw new Error("selfJid not configured in context");
    }
    return ctx.selfJid;
  };

  l.isMeAccount = (wid: any) => {
    const ctx = _getContext();
    if (!ctx?.selfJid) return false;
    return wid.toString?.() === ctx.selfJid.toString?.();
  };
});

__d("WALogger", [], (t, n, r, o, a, i, l) => {
  const noop = () => ({
    sendLogs: () => {},
    verbose: () => ({ sendLogs: () => {} }),
  });
  l.LOG = noop;
  l.WARN = noop;
  l.ERROR = noop;
});

__d("WAWebABProps", [], (t, n, r, o, a, i, l) => {
  l.getABPropConfigValue = () => false;
});

__d("WAWebOfflineHandler", [], (t, n, r, o, a, i, l) => {
  l.OfflineMessageHandler = {
    isResumeFromRestartComplete: () => true,
    isResumeOnSocketDisconnectInProgress: () => false,
  };
});

__d("WAWebCurrentUser", [], (t, n, r, o, a, i, l) => {
  l.isEmployee = () => false;
});

__d("WAWebUsernameGatingUtils", [], (t, n, r, o, a, i, l) => {
  l.usernameDisplayedEnabled = () => true;
});

__d("WAWebOfflineDeviceCache", [], (t, n, r, o, a, i, l) => {
  l.OfflinePendingDeviceCache = {
    addOfflinePendingDevice: () => {},
  };
});

__d("WAWebApiPendingDeviceSync", [], (t, n, r, o, a, i, l) => {
  l.addUserToPendingDeviceSync = () => Promise.resolve();
});

__d("WAWebAdvHandlerApi", [], (t, n, r, o, a, i, l) => {
  l.handleADVDeviceSyncResult = () => Promise.resolve();
});

__d("WAWebUserPrefsMultiDevice", [], (t, n, r, o, a, i, l) => {
  l.getOptOutListHash = () => null;
  l.setOptOutlistHash = () => Promise.resolve();
});
