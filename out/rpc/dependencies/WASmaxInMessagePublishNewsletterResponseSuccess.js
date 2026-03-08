const map = { id: "WASmaxInMessagePublishNewsletterResponseSuccess" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup": require("./WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"ack");if(!n.success)return n;var r=o("WASmaxInMessagePublishNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup").parseNewsletterQuestionResponseOrNewsletterMessageAckMixinGroup(e,t);return r.success?o("WAResultOrError").makeResult({newsletterQuestionResponseOrNewsletterMessageAckMixinGroup:r.value}):r}l.parseNewsletterResponseSuccess=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);