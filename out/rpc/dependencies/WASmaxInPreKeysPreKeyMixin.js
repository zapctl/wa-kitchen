const map = { id: "WASmaxInPreKeysPreKeyMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInPreKeysKeyDataMixin": require("./WASmaxInPreKeysKeyDataMixin.js"),"WASmaxInPreKeysKeyIDMixin": require("./WASmaxInPreKeysKeyIDMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"key");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(t.value,"id");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(t.value,"value");if(!r.success)return r;var a=o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(n.value);if(!a.success)return a;var i=o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(r.value);return i.success?o("WAResultOrError").makeResult({keyIdKeyIDMixin:a.value,keyValueKeyDataMixin:i.value}):i}l.parsePreKeyMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);