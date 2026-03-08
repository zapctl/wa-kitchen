const map = { id: "WASmaxInGroupsPhoneNumberMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseJid").attrUserJid(e,"phone_number");return t.success?o("WAResultOrError").makeResult({phoneNumber:t.value}):t}l.parsePhoneNumberMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);