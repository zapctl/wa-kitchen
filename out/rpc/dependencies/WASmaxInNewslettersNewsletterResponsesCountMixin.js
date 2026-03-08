const map = { id: "WASmaxInNewslettersNewsletterResponsesCountMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"responses_count");if(!n.success)return n;var r=o("WASmaxParseUtils").attrIntRange(n.value,"count",0,void 0);return r.success?o("WAResultOrError").makeResult({responsesCountCount:r.value}):r}l.parseNewsletterResponsesCountMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);