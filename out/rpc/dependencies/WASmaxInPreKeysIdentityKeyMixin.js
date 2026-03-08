const map = { id: "WASmaxInPreKeysIdentityKeyMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxInPreKeysKeyDataMixin": require("./WASmaxInPreKeysKeyDataMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"identity");if(!t.success)return t;var n=o("WASmaxInPreKeysKeyDataMixin").parseKeyDataMixin(t.value);return n.success,n}l.parseIdentityKeyMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);