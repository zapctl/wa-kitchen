const map = { id: "WASmaxInGroupsSubGroupSuggestionWithoutCreatorMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"sub_group_suggestion");if(!t.success)return t;var n=o("WASmaxParseJid").attrGroupJid(e,"jid");return n.success?o("WAResultOrError").makeResult({jid:n.value}):n}l.parseSubGroupSuggestionWithoutCreatorMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);