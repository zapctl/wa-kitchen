const map = { id: "WASmaxOutPrivacyGetIQMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutPrivacyBaseIQGetRequestMixin": require("./WASmaxOutPrivacyBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxOutPrivacyBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").S_WHATSAPP_NET,xmlns:"privacy"}));return e}function s(t){var n=e();return o("WASmaxMixins").mergeStanzas(t,n)}l.mergeGetIQMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);