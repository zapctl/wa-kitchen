const map = { id: "WASmaxInReceiptDeprecatedEditMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInReceiptEnums": require("./WASmaxInReceiptEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrStringEnum(e,"edit",o("WASmaxInReceiptEnums").ENUM_0_1_7);return t.success?o("WAResultOrError").makeResult({edit:t.value}):t}l.parseDeprecatedEditMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);