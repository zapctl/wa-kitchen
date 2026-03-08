const map = { id: "WASmaxInGroupsGroupCreatorCountryCodeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").attrString(e,"creator_country_code");return t.success?o("WAResultOrError").makeResult({creatorCountryCode:t.value}):t}l.parseGroupCreatorCountryCodeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);