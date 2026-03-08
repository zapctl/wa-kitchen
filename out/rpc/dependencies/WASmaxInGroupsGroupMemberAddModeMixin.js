const map = { id: "WASmaxInGroupsGroupMemberAddModeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsMemberAddModes": require("./WASmaxInGroupsMemberAddModes.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"member_add_mode");if(!t.success)return t;var n=o("WASmaxInGroupsMemberAddModes").parseMemberAddModes(t.value);return n.success?o("WAResultOrError").makeResult({memberAddModeMemberAddModes:n.value}):n}l.parseGroupMemberAddModeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);