const map = { id: "WASmaxInGroupsGetMembershipApprovalRequestsRequestorFetchMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"requestor_fetch","true");return t.success?o("WAResultOrError").makeResult({requestorFetch:t.value}):t}l.parseGetMembershipApprovalRequestsRequestorFetchMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);