const map = { id: "WASmaxOutGroupsQueryLinkedGroupMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsOptionalSubGroupMixin": require("./WASmaxOutGroupsOptionalSubGroupMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.queryLinkedType,n=e.queryLinkedJid,r=e.optionalSubGroupMixinArgs,a=o("WASmaxJsx").smax("smax$any",null,o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsOptionalSubGroupMixin").mergeOptionalSubGroupMixin,o("WASmaxJsx").smax("query_linked",{type:o("WAWap").CUSTOM_STRING(t),jid:o("WAWap").GROUP_JID(n)}),r));return a}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeQueryLinkedGroupMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);