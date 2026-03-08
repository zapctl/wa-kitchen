const map = { id: "WASmaxInPreKeysKeyDataMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").contentBytesRange(e,32,32);return t.success?o("WAResultOrError").makeResult({elementValue:t.value}):t}l.parseKeyDataMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);