const map = { id: "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsMembershipApprovalModes": require("./WASmaxOutGroupsMembershipApprovalModes.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.membershipApprovalModesArgs,n=o("WASmaxJsx").smax("membership_approval_mode",null,o("WASmaxOutGroupsMembershipApprovalModes").mergeMembershipApprovalModes(o("WASmaxJsx").smax("group_join",null),t));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeMembershipApprovalGroupJoinModeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);