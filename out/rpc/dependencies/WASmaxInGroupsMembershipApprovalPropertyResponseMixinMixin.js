const map = { id: "WASmaxInGroupsMembershipApprovalPropertyResponseMixinMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup": require("./WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"membership_approval_mode");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"group_join");if(!n.success)return n;var r=o("WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup").parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup(n.value);return r.success?o("WAResultOrError").makeResult({groupJoinGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup:r.value}):r}l.parseMembershipApprovalPropertyResponseMixinMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);