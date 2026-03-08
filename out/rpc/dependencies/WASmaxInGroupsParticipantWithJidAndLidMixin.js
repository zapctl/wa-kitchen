const map = { id: "WASmaxInGroupsParticipantWithJidAndLidMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsParticipantWithJidMixin": require("./WASmaxInGroupsParticipantWithJidMixin.js"),"WASmaxInGroupsParticipantWithLidMixin": require("./WASmaxInGroupsParticipantWithLidMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxInGroupsParticipantWithJidMixin").parseParticipantWithJidMixin(e);if(!n.success)return n;var r=o("WASmaxInGroupsParticipantWithLidMixin").parseParticipantWithLidMixin(e);return r.success?o("WAResultOrError").makeResult(babelHelpers.extends({},n.value,r.value)):r}l.parseParticipantWithJidAndLidMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);