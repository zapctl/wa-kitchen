const map = { id: "WASmaxInBizLinkingGetAccountNonceResponseError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBizLinkingAccountNonceErrors": require("./WASmaxInBizLinkingAccountNonceErrors.js"),"WASmaxInBizLinkingHackBaseIQErrorResponseMixin": require("./WASmaxInBizLinkingHackBaseIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInBizLinkingHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInBizLinkingAccountNonceErrors").parseAccountNonceErrors(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorAccountNonceErrors:i.value})):i}l.parseGetAccountNonceResponseError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);