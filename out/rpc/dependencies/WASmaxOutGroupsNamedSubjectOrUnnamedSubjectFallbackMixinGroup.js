const map = { id: "WASmaxOutGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutGroupsNamedSubjectMixin": require("./WASmaxOutGroupsNamedSubjectMixin.js"),"WASmaxOutGroupsUnnamedSubjectFallbackMixin": require("./WASmaxOutGroupsUnnamedSubjectFallbackMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.namedSubject)return o("WASmaxOutGroupsNamedSubjectMixin").mergeNamedSubjectMixin(e,t.namedSubject);if(t.unnamedSubjectFallback)return o("WASmaxOutGroupsUnnamedSubjectFallbackMixin").mergeUnnamedSubjectFallbackMixin(e,t.unnamedSubjectFallback);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeNamedSubjectOrUnnamedSubjectFallbackMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);