const map = { id: "WASmaxOutGroupsMemberAddModes" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutGroupsAdminAddModeMixin": require("./WASmaxOutGroupsAdminAddModeMixin.js"),"WASmaxOutGroupsAllMembersAddModeMixin": require("./WASmaxOutGroupsAllMembersAddModeMixin.js"),"WASmaxOutGroupsUnknownAddModeMixin": require("./WASmaxOutGroupsUnknownAddModeMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.isAdminAddMode)return o("WASmaxOutGroupsAdminAddModeMixin").mergeAdminAddModeMixin(e);if(t.isAllMembersAddMode)return o("WASmaxOutGroupsAllMembersAddModeMixin").mergeAllMembersAddModeMixin(e);if(t.unknownAddMode)return o("WASmaxOutGroupsUnknownAddModeMixin").mergeUnknownAddModeMixin(e,t.unknownAddMode);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMemberAddModes=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);