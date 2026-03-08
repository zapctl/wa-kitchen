const map = { id: "WASmaxOutMessagePublishNewsletterQuestionReplyMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup": require("./WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup.js"),"WASmaxOutMessagePublishQuestionTypeReplyMixin": require("./WASmaxOutMessagePublishQuestionTypeReplyMixin.js"),"WASmaxOutMessagePublishWAMOSubMixin": require("./WASmaxOutMessagePublishWAMOSubMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasWAMOSub,n=e.newsletterTextOrMediaMixinGroupArgs,r=o("WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup").mergeNewsletterTextOrMediaMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,o("WASmaxOutMessagePublishQuestionTypeReplyMixin").mergeQuestionTypeReplyMixin(o("WASmaxJsx").smax("message",null)),t),n);return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterQuestionReplyMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);