const map = { id: "WASmaxInGroupsMembershipRequestMethodAttributeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsEnums": require("./WASmaxInGroupsEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrStringEnum(e,"request_method",o("WASmaxInGroupsEnums").ENUM_INVITELINK_LINKEDGROUPJOIN_NONADMINADD);return t.success?o("WAResultOrError").makeResult({requestMethod:t.value}):t}l.parseMembershipRequestMethodAttributeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);