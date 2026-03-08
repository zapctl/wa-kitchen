const map = { id: "WASmaxOutGroupsMembershipApprovalModes" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutGroupsGroupJoinMembershipApprovalModeDisabledMixin": require("./WASmaxOutGroupsGroupJoinMembershipApprovalModeDisabledMixin.js"),"WASmaxOutGroupsGroupJoinMembershipApprovalModeEnabledMixin": require("./WASmaxOutGroupsGroupJoinMembershipApprovalModeEnabledMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.isGroupJoinMembershipApprovalModeEnabled)return o("WASmaxOutGroupsGroupJoinMembershipApprovalModeEnabledMixin").mergeGroupJoinMembershipApprovalModeEnabledMixin(e);if(t.isGroupJoinMembershipApprovalModeDisabled)return o("WASmaxOutGroupsGroupJoinMembershipApprovalModeDisabledMixin").mergeGroupJoinMembershipApprovalModeDisabledMixin(e);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMembershipApprovalModes=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);