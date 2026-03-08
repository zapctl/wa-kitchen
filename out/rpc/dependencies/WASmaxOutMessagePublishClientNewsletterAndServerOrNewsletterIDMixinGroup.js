const map = { id: "WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutMessagePublishNewsletterClientAndServerIDMixin": require("./WASmaxOutMessagePublishNewsletterClientAndServerIDMixin.js"),"WASmaxOutMessagePublishNewsletterClientIDMixin": require("./WASmaxOutMessagePublishNewsletterClientIDMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.newsletterClientAndServerID)return o("WASmaxOutMessagePublishNewsletterClientAndServerIDMixin").mergeNewsletterClientAndServerIDMixin(e,t.newsletterClientAndServerID);if(t.newsletterClientID)return o("WASmaxOutMessagePublishNewsletterClientIDMixin").mergeNewsletterClientIDMixin(e,t.newsletterClientID);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeClientNewsletterAndServerOrNewsletterIDMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);