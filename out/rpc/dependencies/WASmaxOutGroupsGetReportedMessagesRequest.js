const map = { id: "WASmaxOutGroupsGetReportedMessagesRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseGetGroupMixin": require("./WASmaxOutGroupsBaseGetGroupMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("reports",null)),e);return t}l.makeGetReportedMessagesRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);