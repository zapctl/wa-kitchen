const map = { id: "WASmaxInAbPropsGetGroupExperimentConfigResponseErrorNoRetry" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInAbPropsIQErrorBadRequestOrFeatureNotImplementedMixinGroup": require("./WASmaxInAbPropsIQErrorBadRequestOrFeatureNotImplementedMixinGroup.js"),"WASmaxInAbPropsIQErrorResponseMixin": require("./WASmaxInAbPropsIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInAbPropsIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInAbPropsIQErrorBadRequestOrFeatureNotImplementedMixinGroup").parseIQErrorBadRequestOrFeatureNotImplementedMixinGroup(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorIQErrorBadRequestOrFeatureNotImplementedMixinGroup:i.value})):i}l.parseGetGroupExperimentConfigResponseErrorNoRetry=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);