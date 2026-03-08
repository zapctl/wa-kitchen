const map = { id: "WASmaxInGroupsCreateParticipantAddedMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsEnums": require("./WASmaxInGroupsEnums.js"),"WASmaxInGroupsParticipantNotAddressableMixin": require("./WASmaxInGroupsParticipantNotAddressableMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum,e,"type",o("WASmaxInGroupsEnums").ENUM_ADMIN_SUPERADMIN);if(!n.success)return n;var r=o("WASmaxInGroupsParticipantNotAddressableMixin").parseParticipantNotAddressableMixin(e);return o("WAResultOrError").makeResult({type:n.value,participantNotAddressableMixin:r.success?r.value:null})}l.parseCreateParticipantAddedMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);