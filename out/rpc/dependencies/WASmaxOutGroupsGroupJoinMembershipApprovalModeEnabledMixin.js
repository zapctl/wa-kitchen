const map = { id: "WASmaxOutGroupsGroupJoinMembershipApprovalModeEnabledMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("group_join",{state:"on"});return e}function s(t){var n=e();return o("WASmaxMixins").mergeStanzas(t,n)}l.mergeGroupJoinMembershipApprovalModeEnabledMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);