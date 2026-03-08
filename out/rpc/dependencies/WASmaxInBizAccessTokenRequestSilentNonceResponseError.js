const map = { id: "WASmaxInBizAccessTokenRequestSilentNonceResponseError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBizAccessTokenHackBaseIQErrorResponseMixin": require("./WASmaxInBizAccessTokenHackBaseIQErrorResponseMixin.js"),"WASmaxInBizAccessTokenRequestSilentNonceErrors": require("./WASmaxInBizAccessTokenRequestSilentNonceErrors.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInBizAccessTokenHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInBizAccessTokenRequestSilentNonceErrors").parseRequestSilentNonceErrors(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorRequestSilentNonceErrors:i.value})):i}l.parseRequestSilentNonceResponseError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);