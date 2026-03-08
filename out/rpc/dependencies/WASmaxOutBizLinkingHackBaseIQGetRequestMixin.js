const map = { id: "WASmaxOutBizLinkingHackBaseIQGetRequestMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutBizLinkingBaseIQGetRequestMixin": require("./WASmaxOutBizLinkingBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.iqFrom,n=o("WASmaxOutBizLinkingBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{from:o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID,t),to:o("WAWap").S_WHATSAPP_NET}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeHackBaseIQGetRequestMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);