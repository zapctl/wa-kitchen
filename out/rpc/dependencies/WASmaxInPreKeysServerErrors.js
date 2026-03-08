const map = { id: "WASmaxInPreKeysServerErrors" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInPreKeysIQErrorFallbackServerMixin": require("./WASmaxInPreKeysIQErrorFallbackServerMixin.js"),"WASmaxInPreKeysIQErrorServiceUnavailableMixin": require("./WASmaxInPreKeysIQErrorServiceUnavailableMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInPreKeysIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"IQErrorServiceUnavailable",value:t.value});var n=o("WASmaxInPreKeysIQErrorFallbackServerMixin").parseIQErrorFallbackServerMixin(e);return n.success?o("WAResultOrError").makeResult({name:"IQErrorFallbackServer",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["IQErrorServiceUnavailable","IQErrorFallbackServer"],[t,n])}l.parseServerErrors=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);