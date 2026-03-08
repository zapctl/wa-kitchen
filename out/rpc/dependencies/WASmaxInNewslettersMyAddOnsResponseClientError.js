const map = { id: "WASmaxInNewslettersMyAddOnsResponseClientError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersMyAddonsClientErrors": require("./WASmaxInNewslettersMyAddonsClientErrors.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInNewslettersMyAddonsClientErrors").parseMyAddonsClientErrors(e,t);return r.success?o("WAResultOrError").makeResult({myAddonsClientErrors:r.value}):r}l.parseMyAddOnsResponseClientError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);