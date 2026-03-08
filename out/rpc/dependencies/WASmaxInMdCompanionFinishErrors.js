const map = { id: "WASmaxInMdCompanionFinishErrors" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInMdIQErrorBadRequestMixin": require("./WASmaxInMdIQErrorBadRequestMixin.js"),"WASmaxInMdIQErrorInternalServerErrorMixin": require("./WASmaxInMdIQErrorInternalServerErrorMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInMdIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"IQErrorInternalServerError",value:t.value});var n=o("WASmaxInMdIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);return n.success?o("WAResultOrError").makeResult({name:"IQErrorBadRequest",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["IQErrorInternalServerError","IQErrorBadRequest"],[t,n])}l.parseCompanionFinishErrors=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);