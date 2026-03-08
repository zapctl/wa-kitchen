const map = { id: "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseTooManyAttempts" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin": require("./WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,r.value,"code","431");if(!a.success)return a;var i=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,r.value,"text","TOO_MANY_ATTEMPTS");if(!i.success)return i;var l=o("WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e,t);return l.success?o("WAResultOrError").makeResult(babelHelpers.extends({errorCode:a.value,errorText:i.value},l.value)):l}l.parseGetAccessTokenAndSessionCookiesResponseTooManyAttempts=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);