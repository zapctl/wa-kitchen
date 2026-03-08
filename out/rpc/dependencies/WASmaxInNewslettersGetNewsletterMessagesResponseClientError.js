const map = { id: "WASmaxInNewslettersGetNewsletterMessagesResponseClientError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersGetNewsletterMessagesClientErrors": require("./WASmaxInNewslettersGetNewsletterMessagesClientErrors.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInNewslettersGetNewsletterMessagesClientErrors").parseGetNewsletterMessagesClientErrors(e,t);return r.success?o("WAResultOrError").makeResult({getNewsletterMessagesClientErrors:r.value}):r}l.parseGetNewsletterMessagesResponseClientError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);