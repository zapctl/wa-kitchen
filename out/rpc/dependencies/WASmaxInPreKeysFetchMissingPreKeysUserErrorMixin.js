const map = { id: "WASmaxInPreKeysFetchMissingPreKeysUserErrorMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"user");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!n.success)return n;var r=o("WASmaxParseUtils").attrString(n.value,"text");if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt,n.value,"code",500);return a.success?o("WAResultOrError").makeResult({errorText:r.value,errorCode:a.value}):a}l.parseFetchMissingPreKeysUserErrorMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);