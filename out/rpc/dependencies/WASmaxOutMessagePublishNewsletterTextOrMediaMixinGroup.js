const map = { id: "WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutMessagePublishNewsletterMediaMixin": require("./WASmaxOutMessagePublishNewsletterMediaMixin.js"),"WASmaxOutMessagePublishNewsletterTextMixin": require("./WASmaxOutMessagePublishNewsletterTextMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.newsletterText)return o("WASmaxOutMessagePublishNewsletterTextMixin").mergeNewsletterTextMixin(e,t.newsletterText);if(t.newsletterMedia)return o("WASmaxOutMessagePublishNewsletterMediaMixin").mergeNewsletterMediaMixin(e,t.newsletterMedia);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeNewsletterTextOrMediaMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);