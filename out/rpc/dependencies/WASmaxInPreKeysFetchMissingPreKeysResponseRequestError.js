const map = { id: "WASmaxInPreKeysFetchMissingPreKeysResponseRequestError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInPreKeysIQErrorResponseMixin": require("./WASmaxInPreKeysIQErrorResponseMixin.js"),"WASmaxInPreKeysRequestErrorsFetch": require("./WASmaxInPreKeysRequestErrorsFetch.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInPreKeysIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInPreKeysRequestErrorsFetch").parseRequestErrorsFetch(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorRequestErrorsFetch:i.value})):i}l.parseFetchMissingPreKeysResponseRequestError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);