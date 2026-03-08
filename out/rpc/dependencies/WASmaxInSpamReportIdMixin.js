const map = { id: "WASmaxInSpamReportIdMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"iq");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"report");if(!n.success)return n;var r=o("WASmaxParseUtils").attrString(n.value,"id");return r.success?o("WAResultOrError").makeResult({reportId:r.value}):r}l.parseReportIdMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);