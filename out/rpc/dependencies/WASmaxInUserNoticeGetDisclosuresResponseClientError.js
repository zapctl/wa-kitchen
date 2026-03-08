const map = { id: "WASmaxInUserNoticeGetDisclosuresResponseClientError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInUserNoticeIQErrorBadRequestMixin": require("./WASmaxInUserNoticeIQErrorBadRequestMixin.js"),"WASmaxInUserNoticeIQErrorResponseMixin": require("./WASmaxInUserNoticeIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInUserNoticeIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(r.value);if(!a.success)return a;var i=o("WASmaxInUserNoticeIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({errorIQErrorBadRequestMixin:a.value},i.value)):i}l.parseGetDisclosuresResponseClientError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);