const map = { id: "WASmaxInGroupsGroupInfoParticipantMixins" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGroupInfoParticipantAdminMixin": require("./WASmaxInGroupsGroupInfoParticipantAdminMixin.js"),"WASmaxInGroupsGroupInfoParticipantNonAdminMixin": require("./WASmaxInGroupsGroupInfoParticipantNonAdminMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsGroupInfoParticipantAdminMixin").parseGroupInfoParticipantAdminMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"GroupInfoParticipantAdmin",value:t.value});var n=o("WASmaxInGroupsGroupInfoParticipantNonAdminMixin").parseGroupInfoParticipantNonAdminMixin(e);return n.success?o("WAResultOrError").makeResult({name:"GroupInfoParticipantNonAdmin",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["GroupInfoParticipantAdmin","GroupInfoParticipantNonAdmin"],[t,n])}l.parseGroupInfoParticipantMixins=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);