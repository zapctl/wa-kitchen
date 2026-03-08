const map = { id: "WASmaxInNewslettersMediaMetaMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"meta");if(!n.success)return n;var r=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString,n.value,"contenttype");return r.success?o("WAResultOrError").makeResult({metaContenttype:r.value}):r}l.parseMediaMetaMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);