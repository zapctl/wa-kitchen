const map = { id: "WASmaxInPingsEnums" };
const exports = module.exports = {};
const dependencies = {"WAJids": require("./WAJids.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){var e={validators:[o("WAJids").validateDomainJid,o("WAJids").validateUserJid],typeName:"DomainJid|UserJid"};l.DOMAINJID_USERJID=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);