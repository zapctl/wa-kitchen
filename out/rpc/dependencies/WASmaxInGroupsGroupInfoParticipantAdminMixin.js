const map = { id: "WASmaxInGroupsGroupInfoParticipantAdminMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsEnums": require("./WASmaxInGroupsEnums.js"),"WASmaxInGroupsParticipantMixin": require("./WASmaxInGroupsParticipantMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxParseUtils").attrStringEnum(e,"type",o("WASmaxInGroupsEnums").ENUM_ADMIN_SUPERADMIN);if(!n.success)return n;var r=o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);return r.success?o("WAResultOrError").makeResult(babelHelpers.extends({type:n.value},r.value)):r}l.parseGroupInfoParticipantAdminMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);