const map = { id: "WASmaxInGroupsParticipantWithJidMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxParseJid").attrUserJid(e,"jid");return n.success?o("WAResultOrError").makeResult({jid:n.value}):n}l.parseParticipantWithJidMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);