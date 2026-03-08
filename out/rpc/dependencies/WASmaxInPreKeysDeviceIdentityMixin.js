const map = { id: "WASmaxInPreKeysDeviceIdentityMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"device-identity");if(!t.success)return t;var n=o("WASmaxParseUtils").contentBytes(t.value);return n.success?o("WAResultOrError").makeResult({deviceIdentityElementValue:n.value}):n}l.parseDeviceIdentityMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);