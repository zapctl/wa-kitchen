const map = { id: "WASmaxOutGroupsBatchGetGroupInfoRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseGetServerMixin": require("./WASmaxOutGroupsBaseGetServerMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.groupJid,n=o("WASmaxJsx").smax("group",{jid:o("WAWap").GROUP_JID(t)});return n}function s(t){var n=t.groupArgs,r=t.queryContext,a=o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("query",{context:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,r)},o("WASmaxChildren").REPEATED_CHILD(e,n,1,1e4))));return a}l.makeBatchGetGroupInfoRequestQueryGroup=e,l.makeBatchGetGroupInfoRequest=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);