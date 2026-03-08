const map = { id: "WASmaxOutMessagePublishNewsletterQuestionResponsePublishMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishContentTypeTextMixin": require("./WASmaxOutMessagePublishContentTypeTextMixin.js"),"WASmaxOutMessagePublishPayloadMixin": require("./WASmaxOutMessagePublishPayloadMixin.js"),"WASmaxOutMessagePublishQuestionTypeResponseMixin": require("./WASmaxOutMessagePublishQuestionTypeResponseMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.payloadMixinArgs,n=o("WASmaxOutMessagePublishQuestionTypeResponseMixin").mergeQuestionTypeResponseMixin(o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(o("WASmaxJsx").smax("message",null,o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(o("WASmaxJsx").smax("plaintext",null),t))));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterQuestionResponsePublishMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);