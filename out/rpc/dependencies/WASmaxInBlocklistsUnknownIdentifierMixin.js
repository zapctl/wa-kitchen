const map = { id: "WASmaxInBlocklistsUnknownIdentifierMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"unknown_identifier","true");return t.success?o("WAResultOrError").makeResult({unknownIdentifier:t.value}):t}l.parseUnknownIdentifierMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);