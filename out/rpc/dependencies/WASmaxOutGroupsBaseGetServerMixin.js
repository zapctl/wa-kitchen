const map = { id: "WASmaxOutGroupsBaseGetServerMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsBaseIQGetRequestMixin": require("./WASmaxOutGroupsBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxOutGroupsBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").G_US,xmlns:"w:g2"}));return e}function s(t){var n=e();return o("WASmaxMixins").mergeStanzas(t,n)}l.mergeBaseGetServerMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);