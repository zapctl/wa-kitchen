const map = { id: "WASmaxInMessagePublishMessageNackRetryAttributesMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"ack");if(!t.success)return t;var n=o("WASmaxParseUtils").attrIntRange(e,"backoff",0,86400);return n.success?o("WAResultOrError").makeResult({backoff:n.value}):n}l.parseMessageNackRetryAttributesMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);