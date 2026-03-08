const map = { id: "WASmaxInPassiveModeActiveIQResponseSuccess" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseReference": require("./WASmaxParseReference.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"active");if(!r.success)return r;var a=o("WASmaxParseReference").attrStringFromReference(t,["id"]);if(!a.success)return a;var i=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"id",a.value);if(!i.success)return i;var l=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"type","result");if(!l.success)return l;var s=o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid,e,"from","s.whatsapp.net");return s.success?o("WAResultOrError").makeResult({type:l.value,from:s.value}):s}l.parseActiveIQResponseSuccess=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);