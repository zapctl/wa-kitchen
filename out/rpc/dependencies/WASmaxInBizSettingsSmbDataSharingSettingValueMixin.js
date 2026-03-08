const map = { id: "WASmaxInBizSettingsSmbDataSharingSettingValueMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBizSettingsEnums": require("./WASmaxInBizSettingsEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrStringEnum(e,"value",o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE);return t.success?o("WAResultOrError").makeResult({value:t.value}):t}l.parseSmbDataSharingSettingValueMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);