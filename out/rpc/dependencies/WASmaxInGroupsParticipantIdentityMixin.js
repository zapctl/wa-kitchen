const map = { id: "WASmaxInGroupsParticipantIdentityMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsParticipantPNMixin": require("./WASmaxInGroupsParticipantPNMixin.js"),"WASmaxInGroupsParticipantUsernameMixin": require("./WASmaxInGroupsParticipantUsernameMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsParticipantPNMixin").parseParticipantPNMixin(e),n=o("WASmaxInGroupsParticipantUsernameMixin").parseParticipantUsernameMixin(e);return o("WAResultOrError").makeResult({participantPNMixin:t.success?t.value:null,participantUsernameMixin:n.success?n.value:null})}l.parseParticipantIdentityMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);