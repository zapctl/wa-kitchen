const map = { id: "WASmaxInNewslettersNewsletterEditMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersAdminEditMixin": require("./WASmaxInNewslettersAdminEditMixin.js"),"WASmaxInNewslettersNewsletterQuestionReplyOrTextOrMediaMixinGroup": require("./WASmaxInNewslettersNewsletterQuestionReplyOrTextOrMediaMixinGroup.js"),"WASmaxInNewslettersWAMOSubMixin": require("./WASmaxInNewslettersWAMOSubMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxInNewslettersAdminEditMixin").parseAdminEditMixin(e);if(!n.success)return n;var r=o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e),a=o("WASmaxInNewslettersNewsletterQuestionReplyOrTextOrMediaMixinGroup").parseNewsletterQuestionReplyOrTextOrMediaMixinGroup(e);return a.success?o("WAResultOrError").makeResult(babelHelpers.extends({},n.value,{wAMOSubMixin:r.success?r.value:null,newsletterQuestionReplyOrTextOrMediaMixinGroup:a.value})):a}l.parseNewsletterEditMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);