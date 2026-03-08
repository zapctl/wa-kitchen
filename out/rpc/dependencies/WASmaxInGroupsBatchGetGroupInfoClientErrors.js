const map = { id: "WASmaxInGroupsBatchGetGroupInfoClientErrors" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsIQErrorBadRequestMixin": require("./WASmaxInGroupsIQErrorBadRequestMixin.js"),"WASmaxInGroupsIQErrorRateOverlimitMixin": require("./WASmaxInGroupsIQErrorRateOverlimitMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"IQErrorBadRequest",value:t.value});var n=o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);return n.success?o("WAResultOrError").makeResult({name:"IQErrorRateOverlimit",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["IQErrorBadRequest","IQErrorRateOverlimit"],[t,n])}l.parseBatchGetGroupInfoClientErrors=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);