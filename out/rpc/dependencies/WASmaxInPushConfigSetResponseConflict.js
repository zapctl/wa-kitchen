const map = { id: "WASmaxInPushConfigSetResponseConflict" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInPushConfigIQErrorConflictMixin": require("./WASmaxInPushConfigIQErrorConflictMixin.js"),"WASmaxInPushConfigIQErrorResponseMixin": require("./WASmaxInPushConfigIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInPushConfigIQErrorConflictMixin").parseIQErrorConflictMixin(r.value);if(!a.success)return a;var i=o("WASmaxInPushConfigIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({errorIQErrorConflictMixin:a.value},i.value)):i}l.parseSetResponseConflict=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);