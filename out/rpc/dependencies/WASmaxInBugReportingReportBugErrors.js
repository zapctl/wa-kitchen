const map = { id: "WASmaxInBugReportingReportBugErrors" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBugReportingIQErrorBadRequestMixin": require("./WASmaxInBugReportingIQErrorBadRequestMixin.js"),"WASmaxInBugReportingIQErrorInternalServerErrorMixin": require("./WASmaxInBugReportingIQErrorInternalServerErrorMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInBugReportingIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"IQErrorBadRequest",value:t.value});var n=o("WASmaxInBugReportingIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);return n.success?o("WAResultOrError").makeResult({name:"IQErrorInternalServerError",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["IQErrorBadRequest","IQErrorInternalServerError"],[t,n])}l.parseReportBugErrors=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);