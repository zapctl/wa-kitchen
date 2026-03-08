const map = { id: "WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"parent");if(!t.success)return t;var n=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"default_membership_approval_mode","request_required");return n.success?o("WAResultOrError").makeResult({defaultMembershipApprovalMode:n.value}):n}l.parseParentGroupDefaultMembershipApprovalModeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);