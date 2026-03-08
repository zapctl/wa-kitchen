const map = { id: "WASmaxInGroupsDedupAttrsMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsEnums": require("./WASmaxInGroupsEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrString(e,"key");if(!t.success)return t;var n=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum,e,"create_ctx",o("WASmaxInGroupsEnums").ENUM_E2EEMIGRATION_REGULAR_RTC);return n.success?o("WAResultOrError").makeResult({key:t.value,createCtx:n.value}):n}l.parseDedupAttrsMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);