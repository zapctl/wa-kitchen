const map = { id: "WASmaxOutMessagePublishNewsletterRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup": require("./WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.messageTo,n=e.clientNewsletterAndServerOrNewsletterIDMixinGroupArgs,r=o("WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup").mergeClientNewsletterAndServerOrNewsletterIDMixinGroup(o("WASmaxJsx").smax("message",{to:o("WAWap").JID(t)}),n);return r}l.makeNewsletterRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);