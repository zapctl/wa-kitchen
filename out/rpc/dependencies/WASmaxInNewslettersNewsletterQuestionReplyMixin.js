const map = { id: "WASmaxInNewslettersNewsletterQuestionReplyMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersNewsletterTextOrMediaMixinGroup": require("./WASmaxInNewslettersNewsletterTextOrMediaMixinGroup.js"),"WASmaxInNewslettersQuestionTypeReplyMixin": require("./WASmaxInNewslettersQuestionTypeReplyMixin.js"),"WASmaxInNewslettersWAMOSubMixin": require("./WASmaxInNewslettersWAMOSubMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxInNewslettersQuestionTypeReplyMixin").parseQuestionTypeReplyMixin(e);if(!n.success)return n;var r=o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e),a=o("WASmaxInNewslettersNewsletterTextOrMediaMixinGroup").parseNewsletterTextOrMediaMixinGroup(e);return a.success?o("WAResultOrError").makeResult(babelHelpers.extends({},n.value,{wAMOSubMixin:r.success?r.value:null,newsletterTextOrMediaMixinGroup:a.value})):a}l.parseNewsletterQuestionReplyMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);