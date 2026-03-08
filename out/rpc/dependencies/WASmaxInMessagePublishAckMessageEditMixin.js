const map = { id: "WASmaxInMessagePublishAckMessageEditMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"ack");if(!t.success)return t;var n=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"edit","1");return n.success?o("WAResultOrError").makeResult({edit:n.value}):n}l.parseAckMessageEditMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);