const map = { id: "WASmaxInMessagePublishApplicationNegativeAckMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"ack");if(!t.success)return t;var n=o("WASmaxParseUtils").attrIntRange(e,"application_error",0,void 0);return n.success?o("WAResultOrError").makeResult({applicationError:n.value}):n}l.parseApplicationNegativeAckMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);