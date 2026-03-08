const map = { id: "WASmaxInGroupsSubjectOwnerPhoneNumberMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseJid").attrUserJid(e,"s_o_pn");return t.success?o("WAResultOrError").makeResult({sOPn:t.value}):t}l.parseSubjectOwnerPhoneNumberMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);