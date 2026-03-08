const map = { id: "WASmaxInBizLinkingIQErrorResponseMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseReference": require("./WASmaxParseReference.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseReference").attrStringFromReference(t,["id"]);if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"id",r.value);if(!a.success)return a;var i=o("WASmaxParseReference").attrStringFromReference(t,["to"]);if(!i.success)return i;var l=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"from",i.value);if(!l.success)return l;var s=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"type","error");return s.success?o("WAResultOrError").makeResult({type:s.value}):s}l.parseIQErrorResponseMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);