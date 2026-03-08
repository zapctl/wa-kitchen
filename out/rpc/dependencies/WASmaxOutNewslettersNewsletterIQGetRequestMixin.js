const map = { id: "WASmaxOutNewslettersNewsletterIQGetRequestMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutNewslettersBaseIQGetRequestMixin": require("./WASmaxOutNewslettersBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.iqTo,n=o("WASmaxOutNewslettersBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").JID(t),xmlns:"newsletter"}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterIQGetRequestMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);