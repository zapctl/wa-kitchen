const map = { id: "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsNamedSubjectMixin": require("./WASmaxInGroupsNamedSubjectMixin.js"),"WASmaxInGroupsUnnamedSubjectFallbackMixin": require("./WASmaxInGroupsUnnamedSubjectFallbackMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsNamedSubjectMixin").parseNamedSubjectMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"NamedSubject",value:t.value});var n=o("WASmaxInGroupsUnnamedSubjectFallbackMixin").parseUnnamedSubjectFallbackMixin(e);return n.success?o("WAResultOrError").makeResult({name:"UnnamedSubjectFallback",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["NamedSubject","UnnamedSubjectFallback"],[t,n])}l.parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);