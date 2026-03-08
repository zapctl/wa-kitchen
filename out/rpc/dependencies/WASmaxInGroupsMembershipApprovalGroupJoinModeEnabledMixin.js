const map = { id: "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin": require("./WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"membership_approval_mode");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"group_join");if(!n.success)return n;var r=o("WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin").parseGroupJoinMembershipApprovalModeEnabledMixin(n.value);return r.success,r}l.parseMembershipApprovalGroupJoinModeEnabledMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);