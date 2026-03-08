const map = { id: "WASmaxInGroupsSubjectOwnerUsernameMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrString(e,"s_o_username");return t.success?o("WAResultOrError").makeResult({sOUsername:t.value}):t}l.parseSubjectOwnerUsernameMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);