const map = { id: "WASmaxInBlocklistsDisplayNameMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrString(e,"display_name");return t.success?o("WAResultOrError").makeResult({displayName:t.value}):t}l.parseDisplayNameMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);