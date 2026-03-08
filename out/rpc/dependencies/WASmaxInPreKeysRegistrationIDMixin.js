const map = { id: "WASmaxInPreKeysRegistrationIDMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"registration");if(!t.success)return t;var n=o("WASmaxParseUtils").contentBytesRange(t.value,4,4);return n.success?o("WAResultOrError").makeResult({registrationElementValue:n.value}):n}l.parseRegistrationIDMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);