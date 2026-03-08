const map = { id: "WASmaxInGroupsParticipantWithJidLidAndDisplayNameMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsDisplayNameMixin": require("./WASmaxInGroupsDisplayNameMixin.js"),"WASmaxInGroupsParticipantWithJidAndLidMixin": require("./WASmaxInGroupsParticipantWithJidAndLidMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxInGroupsParticipantWithJidAndLidMixin").parseParticipantWithJidAndLidMixin(e);if(!n.success)return n;var r=o("WASmaxInGroupsDisplayNameMixin").parseDisplayNameMixin(e);return r.success?o("WAResultOrError").makeResult(babelHelpers.extends({},n.value,r.value)):r}l.parseParticipantWithJidLidAndDisplayNameMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);