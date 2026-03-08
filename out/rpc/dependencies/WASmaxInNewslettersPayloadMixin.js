const map = { id: "WASmaxInNewslettersPayloadMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"plaintext");if(!t.success)return t;var n=o("WASmaxParseUtils").contentBytesRange(e,1,1048576);return n.success?o("WAResultOrError").makeResult({elementValue:n.value}):n}l.parsePayloadMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);