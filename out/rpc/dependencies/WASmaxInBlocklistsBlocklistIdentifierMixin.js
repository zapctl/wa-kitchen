const map = { id: "WASmaxInBlocklistsBlocklistIdentifierMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBlocklistsBlocklistIds": require("./WASmaxInBlocklistsBlocklistIds.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInBlocklistsBlocklistIds").parseBlocklistIds(e);return t.success?o("WAResultOrError").makeResult({blocklistIds:t.value}):t}l.parseBlocklistIdentifierMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);