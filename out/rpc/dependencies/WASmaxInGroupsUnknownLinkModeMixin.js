const map = { id: "WASmaxInGroupsUnknownLinkModeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"member_link_mode");if(!t.success)return t;var n=o("WASmaxParseUtils").contentString(e);return n.success?o("WAResultOrError").makeResult({elementValue:n.value}):n}l.parseUnknownLinkModeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);