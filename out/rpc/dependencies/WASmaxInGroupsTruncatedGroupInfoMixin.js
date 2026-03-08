const map = { id: "WASmaxInGroupsTruncatedGroupInfoMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"group");if(!t.success)return t;var n=o("WASmaxParseUtils").attrString(e,"id");if(!n.success)return n;var r=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"truncated","true");if(!r.success)return r;var a=o("WASmaxParseUtils").attrIntRange(e,"size",0,19999);return a.success?o("WAResultOrError").makeResult({id:n.value,truncated:r.value,size:a.value}):a}l.parseTruncatedGroupInfoMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);