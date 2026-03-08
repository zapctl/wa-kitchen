const map = { id: "WASmaxInNewslettersGetNewsletterMessageUpdatesResponseClientError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersGetNewsletterMessageUpdatesClientErrors": require("./WASmaxInNewslettersGetNewsletterMessageUpdatesClientErrors.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInNewslettersGetNewsletterMessageUpdatesClientErrors").parseGetNewsletterMessageUpdatesClientErrors(e,t);return r.success?o("WAResultOrError").makeResult({getNewsletterMessageUpdatesClientErrors:r.value}):r}l.parseGetNewsletterMessageUpdatesResponseClientError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);