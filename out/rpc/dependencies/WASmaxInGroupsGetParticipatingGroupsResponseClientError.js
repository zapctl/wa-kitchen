const map = { id: "WASmaxInGroupsGetParticipatingGroupsResponseClientError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup": require("./WASmaxInGroupsIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup.js"),"WASmaxInGroupsIQErrorResponseMixin": require("./WASmaxInGroupsIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInGroupsIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup").parseIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup:i.value})):i}l.parseGetParticipatingGroupsResponseClientError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);