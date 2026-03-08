const map = { id: "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBizCtwaAdAccountCommonAdAccountErrors": require("./WASmaxInBizCtwaAdAccountCommonAdAccountErrors.js"),"WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin": require("./WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInBizCtwaAdAccountCommonAdAccountErrors").parseCommonAdAccountErrors(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorCommonAdAccountErrors:i.value})):i}l.parseGetAccessTokenAndSessionCookiesResponseError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);