const map = { id: "WASmaxOutGroupsRevokeRequestCodeRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseSetGroupMixin": require("./WASmaxOutGroupsBaseSetGroupMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.participantJid,n=o("WASmaxJsx").smax("participant",{jid:o("WAWap").USER_JID(t)});return n}function s(t){var n=t.participantArgs,r=o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("revoke",null,o("WASmaxChildren").REPEATED_CHILD(e,n,1,1e3))),t);return r}l.makeRevokeRequestCodeRequestRevokeParticipant=e,l.makeRevokeRequestCodeRequest=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);