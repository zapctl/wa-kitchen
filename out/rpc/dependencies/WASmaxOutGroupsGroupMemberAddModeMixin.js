const map = { id: "WASmaxOutGroupsGroupMemberAddModeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsMemberAddModes": require("./WASmaxOutGroupsMemberAddModes.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.memberAddModesArgs,n=o("WASmaxJsx").smax("smax$any",null,o("WASmaxOutGroupsMemberAddModes").mergeMemberAddModes(o("WASmaxJsx").smax("member_add_mode",null),t));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeGroupMemberAddModeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);