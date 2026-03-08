const map = { id: "WASmaxOutMessagePublishNewsletterEditMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishAdminEditMixin": require("./WASmaxOutMessagePublishAdminEditMixin.js"),"WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup": require("./WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup.js"),"WASmaxOutMessagePublishWAMOSubMixin": require("./WASmaxOutMessagePublishWAMOSubMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasWAMOSub,n=e.newsletterQuestionReplyOrTextOrMediaMixinGroupArgs,r=o("WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup").mergeNewsletterQuestionReplyOrTextOrMediaMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,o("WASmaxOutMessagePublishAdminEditMixin").mergeAdminEditMixin(o("WASmaxJsx").smax("message",null)),t),n);return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterEditMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);