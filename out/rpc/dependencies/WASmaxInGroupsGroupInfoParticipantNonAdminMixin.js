const map = { id: "WASmaxInGroupsGroupInfoParticipantNonAdminMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxInGroupsParticipantMixin": require("./WASmaxInGroupsParticipantMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);return n.success,n}l.parseGroupInfoParticipantNonAdminMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);