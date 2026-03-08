const map = { id: "WASmaxOutMessagePublishNewsletterClientAndServerIDMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup": require("./WASmaxOutMessagePublishNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.messageId,n=e.messageServerId,r=e.newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs,a=o("WASmaxOutMessagePublishNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup").mergeNewsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroup(o("WASmaxJsx").smax("message",{id:o("WAWap").STANZA_ID(t),server_id:o("WAWap").INT(n)}),r);return a}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterClientAndServerIDMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);