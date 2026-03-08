const map = { id: "WASmaxInVoipLinkCreateResponseLinkCreateNack" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInVoipCallAckBaseMixin": require("./WASmaxInVoipCallAckBaseMixin.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"ack");if(!n.success)return n;var r=o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid,e,"from","call");if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"type","link_create");if(!a.success)return a;var i=o("WASmaxParseUtils").attrString(e,"error");if(!i.success)return i;var l=o("WASmaxInVoipCallAckBaseMixin").parseCallAckBaseMixin(e,t);return l.success?o("WAResultOrError").makeResult(babelHelpers.extends({from:r.value,type:a.value,error:i.value},l.value)):l}l.parseLinkCreateResponseLinkCreateNack=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);