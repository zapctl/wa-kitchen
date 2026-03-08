const map = { id: "WASmaxInBlocklistsServerErrors" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBlocklistsIQErrorFeatureNotImplementedMixin": require("./WASmaxInBlocklistsIQErrorFeatureNotImplementedMixin.js"),"WASmaxInBlocklistsIQErrorInternalServerErrorMixin": require("./WASmaxInBlocklistsIQErrorInternalServerErrorMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInBlocklistsIQErrorFeatureNotImplementedMixin").parseIQErrorFeatureNotImplementedMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"IQErrorFeatureNotImplemented",value:t.value});var n=o("WASmaxInBlocklistsIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);return n.success?o("WAResultOrError").makeResult({name:"IQErrorInternalServerError",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["IQErrorFeatureNotImplemented","IQErrorInternalServerError"],[t,n])}l.parseServerErrors=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);