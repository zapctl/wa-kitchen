const map = { id: "WASmaxInBizLinkingHasDisplayNameMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"display_name");if(!t.success)return t;var n=o("WASmaxParseUtils").contentString(t.value);return n.success?o("WAResultOrError").makeResult({displayNameElementValue:n.value}):n}l.parseHasDisplayNameMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);