const map = { id: "WASmaxInGroupsGroupJoinMembershipApprovalModeDisabledMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"group_join");if(!t.success)return t;var n=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"state","off");return n.success?o("WAResultOrError").makeResult({state:n.value}):n}l.parseGroupJoinMembershipApprovalModeDisabledMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);