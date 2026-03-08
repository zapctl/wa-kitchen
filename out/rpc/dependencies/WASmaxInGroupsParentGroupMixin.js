const map = { id: "WASmaxInGroupsParentGroupMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseJid").attrGroupJid(e,"parent_group_jid");return t.success?o("WAResultOrError").makeResult({parentGroupJid:t.value}):t}l.parseParentGroupMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);