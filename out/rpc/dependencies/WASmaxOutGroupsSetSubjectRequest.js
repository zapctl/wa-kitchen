const map = { id: "WASmaxOutGroupsSetSubjectRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseSetGroupMixin": require("./WASmaxOutGroupsBaseSetGroupMixin.js"),"WASmaxOutGroupsSetSubjectChangeSubjectMixin": require("./WASmaxOutGroupsSetSubjectChangeSubjectMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutGroupsSetSubjectChangeSubjectMixin").mergeSetSubjectChangeSubjectMixin(o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq",null),e),e);return t}l.makeSetSubjectRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);