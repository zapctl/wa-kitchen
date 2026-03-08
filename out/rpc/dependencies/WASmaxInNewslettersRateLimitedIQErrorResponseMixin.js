const map = { id: "WASmaxInNewslettersRateLimitedIQErrorResponseMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersIQErrorRateOverlimitMixin": require("./WASmaxInNewslettersIQErrorRateOverlimitMixin.js"),"WASmaxInNewslettersIQErrorResponseMixin": require("./WASmaxInNewslettersIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInNewslettersIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(r.value);if(!a.success)return a;var i=o("WASmaxInNewslettersIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({errorIQErrorRateOverlimitMixin:a.value},i.value)):i}l.parseRateLimitedIQErrorResponseMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);