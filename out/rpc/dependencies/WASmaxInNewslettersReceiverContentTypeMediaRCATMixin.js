const map = { id: "WASmaxInNewslettersReceiverContentTypeMediaRCATMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersContentTypeMediaMixin": require("./WASmaxInNewslettersContentTypeMediaMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"plaintext");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"rcat");if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,n.value,"mediatype","url");if(!a.success)return a;var i=o("WASmaxParseUtils").contentBytes(r.value);if(!i.success)return i;var l=o("WASmaxInNewslettersContentTypeMediaMixin").parseContentTypeMediaMixin(e);return l.success?o("WAResultOrError").makeResult(babelHelpers.extends({plaintextMediatype:a.value,rcatElementValue:i.value},l.value)):l}l.parseReceiverContentTypeMediaRCATMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);