const map = { id: "WASmaxOutGroupsBaseGetGroupMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsBaseIQGetRequestMixin": require("./WASmaxOutGroupsBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.iqTo,n=o("WASmaxOutGroupsBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").GROUP_JID(t),xmlns:"w:g2"}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeBaseGetGroupMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);