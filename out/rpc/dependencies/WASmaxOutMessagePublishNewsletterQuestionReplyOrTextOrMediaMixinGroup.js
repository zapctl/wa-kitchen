const map = { id: "WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutMessagePublishNewsletterMediaMixin": require("./WASmaxOutMessagePublishNewsletterMediaMixin.js"),"WASmaxOutMessagePublishNewsletterQuestionReplyMixin": require("./WASmaxOutMessagePublishNewsletterQuestionReplyMixin.js"),"WASmaxOutMessagePublishNewsletterTextMixin": require("./WASmaxOutMessagePublishNewsletterTextMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.newsletterQuestionReply)return o("WASmaxOutMessagePublishNewsletterQuestionReplyMixin").mergeNewsletterQuestionReplyMixin(e,t.newsletterQuestionReply);if(t.newsletterText)return o("WASmaxOutMessagePublishNewsletterTextMixin").mergeNewsletterTextMixin(e,t.newsletterText);if(t.newsletterMedia)return o("WASmaxOutMessagePublishNewsletterMediaMixin").mergeNewsletterMediaMixin(e,t.newsletterMedia);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeNewsletterQuestionReplyOrTextOrMediaMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);