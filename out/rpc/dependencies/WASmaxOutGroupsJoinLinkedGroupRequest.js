const map = { id: "WASmaxOutGroupsJoinLinkedGroupRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseSetGroupMixin": require("./WASmaxOutGroupsBaseSetGroupMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.joinLinkedGroupType,n=e.joinLinkedGroupJid,r=o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("join_linked_group",{type:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,t),jid:o("WAWap").GROUP_JID(n)})),e);return r}l.makeJoinLinkedGroupRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);