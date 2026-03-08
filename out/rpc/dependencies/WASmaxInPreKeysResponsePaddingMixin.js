const map = { id: "WASmaxInPreKeysResponsePaddingMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"iq");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"padding");if(!n.success)return n;var r=o("WASmaxParseUtils").contentBytesRange(n.value,0,524288);return r.success?o("WAResultOrError").makeResult({paddingElementValue:r.value}):r}l.parseResponsePaddingMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);