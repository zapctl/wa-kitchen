const map = { id: "WASmaxOutGroupsReportMessagesRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseSetGroupMixin": require("./WASmaxOutGroupsBaseSetGroupMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.reportMessageId,n=o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("reports",null,o("WASmaxJsx").smax("report",{message_id:o("WAWap").STANZA_ID(t)}))),e);return n}l.makeReportMessagesRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);