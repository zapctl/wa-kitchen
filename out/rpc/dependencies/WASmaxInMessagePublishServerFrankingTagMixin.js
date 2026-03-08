const map = { id: "WASmaxInMessagePublishServerFrankingTagMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"franking");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(t.value,"reporting_tag");if(!n.success)return n;var r=o("WASmaxParseUtils").contentBytesRange(n.value,9,128);return r.success?o("WAResultOrError").makeResult({frankingReportingTagElementValue:r.value}):r}l.parseServerFrankingTagMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);