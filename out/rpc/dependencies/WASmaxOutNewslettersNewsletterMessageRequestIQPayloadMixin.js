const map = { id: "WASmaxOutNewslettersNewsletterMessageRequestIQPayloadMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin": require("./WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin.js"),"WASmaxOutNewslettersQueryNewsletterParamsMixin": require("./WASmaxOutNewslettersQueryNewsletterParamsMixin.js"),"WASmaxOutNewslettersSelfIQGetRequestMixin": require("./WASmaxOutNewslettersSelfIQGetRequestMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.queryNewsletterParamsMixinArgs,n=e.newsletterMessageRequestPayloadMixinArgs,r=o("WASmaxOutNewslettersSelfIQGetRequestMixin").mergeSelfIQGetRequestMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin").mergeNewsletterMessageRequestPayloadMixin(o("WASmaxOutNewslettersQueryNewsletterParamsMixin").mergeQueryNewsletterParamsMixin(o("WASmaxJsx").smax("messages",null),t),n)));return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterMessageRequestIQPayloadMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);