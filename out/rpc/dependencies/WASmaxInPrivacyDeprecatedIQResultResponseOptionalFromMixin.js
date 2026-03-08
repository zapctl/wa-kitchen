const map = { id: "WASmaxInPrivacyDeprecatedIQResultResponseOptionalFromMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInPrivacyEnums": require("./WASmaxInPrivacyEnums.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseReference": require("./WASmaxParseReference.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseReference").attrStringFromReference(t,["id"]);if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"id",r.value);if(!a.success)return a;var i=o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrJidEnum,e,"from",o("WASmaxInPrivacyEnums").DOMAINJID_USERJID);if(!i.success)return i;var l=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"type","result");return l.success?o("WAResultOrError").makeResult({from:i.value,type:l.value}):l}l.parseDeprecatedIQResultResponseOptionalFromMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);