const map = { id: "WASmaxOutGroupsAllMembersShareModeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("member_share_group_history_mode",null,"all_member_share");return e}function s(t){var n=e();return o("WASmaxMixins").mergeStanzas(t,n)}l.mergeAllMembersShareModeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);