const map = { id: "WASmaxInGroupsGroupInfoParticipantMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGroupInfoParticipantMixins": require("./WASmaxInGroupsGroupInfoParticipantMixins.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxInGroupsGroupInfoParticipantMixins").parseGroupInfoParticipantMixins(e);return n.success?o("WAResultOrError").makeResult({groupInfoParticipantMixins:n.value}):n}l.parseGroupInfoParticipantMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);