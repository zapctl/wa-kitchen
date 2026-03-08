const map = { id: "WASmaxInGroupsGroupCreatorPhoneNumberMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseJid").attrUserJid(e,"creator_pn");return t.success?o("WAResultOrError").makeResult({creatorPn:t.value}):t}l.parseGroupCreatorPhoneNumberMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);