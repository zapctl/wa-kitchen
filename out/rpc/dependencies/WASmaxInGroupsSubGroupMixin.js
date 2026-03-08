const map = { id: "WASmaxInGroupsSubGroupMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseJid").attrGroupJid(e,"sub_group_jid");return t.success?o("WAResultOrError").makeResult({subGroupJid:t.value}):t}l.parseSubGroupMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);