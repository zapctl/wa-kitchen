const map = { id: "WASmaxInGroupsIQErrorBlockedIntegrityEnforcementMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"error");if(!t.success)return t;var n=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"text","blocked-integrity-enforcement");if(!n.success)return n;var r=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt,e,"code",486);return r.success?o("WAResultOrError").makeResult({text:n.value,code:r.value}):r}l.parseIQErrorBlockedIntegrityEnforcementMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);