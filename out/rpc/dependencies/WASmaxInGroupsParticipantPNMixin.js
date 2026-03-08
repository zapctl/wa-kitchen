const map = { id: "WASmaxInGroupsParticipantPNMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseJid").attrUserJid(e,"participant_pn");return t.success?o("WAResultOrError").makeResult({participantPn:t.value}):t}l.parseParticipantPNMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);