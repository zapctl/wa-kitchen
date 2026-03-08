const map = { id: "WASmaxInNewslettersNewsletterViewsCountViewsOrDeprecatedMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersNewsletterViewsCountDeprecatedMixin": require("./WASmaxInNewslettersNewsletterViewsCountDeprecatedMixin.js"),"WASmaxInNewslettersNewsletterViewsCountViewsMixin": require("./WASmaxInNewslettersNewsletterViewsCountViewsMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInNewslettersNewsletterViewsCountViewsMixin").parseNewsletterViewsCountViewsMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"NewsletterViewsCountViews",value:t.value});var n=o("WASmaxInNewslettersNewsletterViewsCountDeprecatedMixin").parseNewsletterViewsCountDeprecatedMixin(e);return n.success?o("WAResultOrError").makeResult({name:"NewsletterViewsCountDeprecated",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["NewsletterViewsCountViews","NewsletterViewsCountDeprecated"],[t,n])}l.parseNewsletterViewsCountViewsOrDeprecatedMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);