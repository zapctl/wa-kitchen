const map = { id: "WASmaxInBlocklistsGetBlocklistErrors" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBlocklistsIQErrorBadRequestMixin": require("./WASmaxInBlocklistsIQErrorBadRequestMixin.js"),"WASmaxInBlocklistsIQErrorRateOverlimitMixin": require("./WASmaxInBlocklistsIQErrorRateOverlimitMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInBlocklistsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"IQErrorBadRequest",value:t.value});var n=o("WASmaxInBlocklistsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);return n.success?o("WAResultOrError").makeResult({name:"IQErrorRateOverlimit",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["IQErrorBadRequest","IQErrorRateOverlimit"],[t,n])}l.parseGetBlocklistErrors=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);