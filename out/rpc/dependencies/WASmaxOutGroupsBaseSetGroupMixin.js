const map = { id: "WASmaxOutGroupsBaseSetGroupMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsBaseIQSetRequestMixin": require("./WASmaxOutGroupsBaseIQSetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.iqTo,n=o("WASmaxOutGroupsBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").GROUP_JID(t),xmlns:"w:g2"}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeBaseSetGroupMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);