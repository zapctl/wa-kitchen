const map = { id: "WASmaxInBizLinkingHasShowOnProfileMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBizLinkingEnums": require("./WASmaxInBizLinkingEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"show_on_profile");if(!t.success)return t;var n=o("WASmaxParseUtils").contentStringEnum(t.value,o("WASmaxInBizLinkingEnums").ENUM_FALSE_TRUE);return n.success?o("WAResultOrError").makeResult({showOnProfileElementValue:n.value}):n}l.parseHasShowOnProfileMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);