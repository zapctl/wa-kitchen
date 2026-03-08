const map = { id: "WASmaxInGroupsParticipantWithLidMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxParseJid").attrLidUserJid(e,"lid");return n.success?o("WAResultOrError").makeResult({lid:n.value}):n}l.parseParticipantWithLidMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);