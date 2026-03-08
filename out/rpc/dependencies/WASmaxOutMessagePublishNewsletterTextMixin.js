const map = { id: "WASmaxOutMessagePublishNewsletterTextMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishContentTypeTextMixin": require("./WASmaxOutMessagePublishContentTypeTextMixin.js"),"WASmaxOutMessagePublishPayloadMixin": require("./WASmaxOutMessagePublishPayloadMixin.js"),"WASmaxOutMessagePublishWAMOSubMixin": require("./WASmaxOutMessagePublishWAMOSubMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasWAMOSub,n=e.payloadMixinArgs,r=o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(o("WASmaxJsx").smax("message",null,o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(o("WASmaxJsx").smax("plaintext",null),n))),t);return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterTextMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);