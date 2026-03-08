const map = { id: "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsMemberShareGroupHistoryModes": require("./WASmaxInGroupsMemberShareGroupHistoryModes.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"member_share_group_history_mode");if(!t.success)return t;var n=o("WASmaxInGroupsMemberShareGroupHistoryModes").parseMemberShareGroupHistoryModes(t.value);return n.success?o("WAResultOrError").makeResult({memberShareGroupHistoryModeMemberShareGroupHistoryModes:n.value}):n}l.parseGroupMemberShareGroupHistoryModeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);