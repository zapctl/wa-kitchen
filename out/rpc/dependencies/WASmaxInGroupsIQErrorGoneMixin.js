const map = { id: "WASmaxInGroupsIQErrorGoneMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"error");if(!t.success)return t;var n=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"text","gone");if(!n.success)return n;var r=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt,e,"code",410);return r.success?o("WAResultOrError").makeResult({text:n.value,code:r.value}):r}l.parseIQErrorGoneMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);