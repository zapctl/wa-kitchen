const map = { id: "WASmaxInNewslettersSubscribeToLiveUpdatesResponseClientError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersSubscribeToLiveUpdatesClientErrors": require("./WASmaxInNewslettersSubscribeToLiveUpdatesClientErrors.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInNewslettersSubscribeToLiveUpdatesClientErrors").parseSubscribeToLiveUpdatesClientErrors(e,t);return r.success?o("WAResultOrError").makeResult({subscribeToLiveUpdatesClientErrors:r.value}):r}l.parseSubscribeToLiveUpdatesResponseClientError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);