const map = { id: "WASmaxInWaffleGetCertificateResponseError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInWaffleGetCertificateErrors": require("./WASmaxInWaffleGetCertificateErrors.js"),"WASmaxInWaffleIQErrorResponseMixin": require("./WASmaxInWaffleIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInWaffleIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInWaffleGetCertificateErrors").parseGetCertificateErrors(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorGetCertificateErrors:i.value})):i}l.parseGetCertificateResponseError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);