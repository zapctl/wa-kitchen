const map = { id: "WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutMessagePublishNewsletterMediaPublishMixin": require("./WASmaxOutMessagePublishNewsletterMediaPublishMixin.js"),"WASmaxOutMessagePublishNewsletterTextMixin": require("./WASmaxOutMessagePublishNewsletterTextMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.newsletterText)return o("WASmaxOutMessagePublishNewsletterTextMixin").mergeNewsletterTextMixin(e,t.newsletterText);if(t.newsletterMediaPublish)return o("WASmaxOutMessagePublishNewsletterMediaPublishMixin").mergeNewsletterMediaPublishMixin(e,t.newsletterMediaPublish);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeNewsletterTextOrMediaPublishMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);