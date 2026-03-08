const map = { id: "WASmaxInMessagePublishNewsletterResponseNegative" };
const exports = module.exports = {};
const dependencies = {"WASmaxInMessagePublishNegativeAckMixin": require("./WASmaxInMessagePublishNegativeAckMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"ack");if(!n.success)return n;var r=o("WASmaxInMessagePublishNegativeAckMixin").parseNegativeAckMixin(e,t);return r.success,r}l.parseNewsletterResponseNegative=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);