const map = { id: "WASmaxOutMessagePublishNewsletterMediaPublishMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishNewsletterMediaMixin": require("./WASmaxOutMessagePublishNewsletterMediaMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.messageMediaId,n=o("WASmaxOutMessagePublishNewsletterMediaMixin").mergeNewsletterMediaMixin(o("WASmaxJsx").smax("message",{media_id:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,t)}),e);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterMediaPublishMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);