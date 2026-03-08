const map = { id: "WASmaxOutGroupsGetMembershipApprovalRequestsRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsBaseGetGroupMixin": require("./WASmaxOutGroupsBaseGetGroupMixin.js"),"WASmaxOutGroupsGetMembershipApprovalRequestsRequestorFetchMixin": require("./WASmaxOutGroupsGetMembershipApprovalRequestsRequestorFetchMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasGetMembershipApprovalRequestsRequestorFetch,n=o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsGetMembershipApprovalRequestsRequestorFetchMixin").mergeGetMembershipApprovalRequestsRequestorFetchMixin,o("WASmaxJsx").smax("membership_approval_requests",null),t)),e);return n}l.makeGetMembershipApprovalRequestsRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);