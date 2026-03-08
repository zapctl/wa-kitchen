const map = { id: "WASmaxInGroupsGroupAddressingModeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsEnums": require("./WASmaxInGroupsEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrStringEnum(e,"addressing_mode",o("WASmaxInGroupsEnums").ENUM_LID_PN);return t.success?o("WAResultOrError").makeResult({addressingMode:t.value}):t}l.parseGroupAddressingModeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);