const map = { id: "WASmaxInNewslettersContentTypePollResultSnapshotMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"meta");if(!n.success)return n;var r=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"type","poll");if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,n.value,"polltype","result_snapshot");return a.success?o("WAResultOrError").makeResult({type:r.value,metaPolltype:a.value}):a}l.parseContentTypePollResultSnapshotMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);