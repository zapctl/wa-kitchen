const map = { id: "WASmaxOutMessagePublishNewsletterQuestionPublishMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup": require("./WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup.js"),"WASmaxOutMessagePublishQuestionTypeQuestionMixin": require("./WASmaxOutMessagePublishQuestionTypeQuestionMixin.js"),"WASmaxOutMessagePublishWAMOSubMixin": require("./WASmaxOutMessagePublishWAMOSubMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasWAMOSub,n=e.newsletterTextOrMediaPublishMixinGroupArgs,r=o("WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup").mergeNewsletterTextOrMediaPublishMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,o("WASmaxOutMessagePublishQuestionTypeQuestionMixin").mergeQuestionTypeQuestionMixin(o("WASmaxJsx").smax("message",null)),t),n);return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterQuestionPublishMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);