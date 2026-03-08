const map = { id: "WASmaxInPrivacyPnJidMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseJid": require("./WASmaxParseJid.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseJid").attrUserJid(e,"pn_jid");return t.success?o("WAResultOrError").makeResult({pnJid:t.value}):t}l.parsePnJidMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);