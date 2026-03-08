const map = { id: "WASmaxInNewslettersNewsletterTextOrMediaMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersNewsletterMediaMixin": require("./WASmaxInNewslettersNewsletterMediaMixin.js"),"WASmaxInNewslettersNewsletterTextMixin": require("./WASmaxInNewslettersNewsletterTextMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInNewslettersNewsletterTextMixin").parseNewsletterTextMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"NewsletterText",value:t.value});var n=o("WASmaxInNewslettersNewsletterMediaMixin").parseNewsletterMediaMixin(e);return n.success?o("WAResultOrError").makeResult({name:"NewsletterMedia",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["NewsletterText","NewsletterMedia"],[t,n])}l.parseNewsletterTextOrMediaMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);