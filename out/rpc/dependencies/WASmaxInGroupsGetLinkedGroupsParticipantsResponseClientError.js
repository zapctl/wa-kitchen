const map = { id: "WASmaxInGroupsGetLinkedGroupsParticipantsResponseClientError" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGetLinkedGroupsParticipantsClientErrors": require("./WASmaxInGroupsGetLinkedGroupsParticipantsClientErrors.js"),"WASmaxInGroupsIQErrorResponseMixin": require("./WASmaxInGroupsIQErrorResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"error");if(!r.success)return r;var a=o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);if(!a.success)return a;var i=o("WASmaxInGroupsGetLinkedGroupsParticipantsClientErrors").parseGetLinkedGroupsParticipantsClientErrors(r.value);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({},a.value,{errorGetLinkedGroupsParticipantsClientErrors:i.value})):i}l.parseGetLinkedGroupsParticipantsResponseClientError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);