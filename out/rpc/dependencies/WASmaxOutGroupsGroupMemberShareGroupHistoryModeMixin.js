const map = { id: "WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsMemberShareGroupHistoryModes": require("./WASmaxOutGroupsMemberShareGroupHistoryModes.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.memberShareGroupHistoryModesArgs,n=o("WASmaxJsx").smax("smax$any",null,o("WASmaxOutGroupsMemberShareGroupHistoryModes").mergeMemberShareGroupHistoryModes(o("WASmaxJsx").smax("member_share_group_history_mode",null),t));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeGroupMemberShareGroupHistoryModeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);