const map = { id: "WASmaxInMessagePublishAckPaidGroupConversationMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"ack");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"biz");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(n.value,"pricing");if(!r.success)return r;var a=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString,r.value,"business_country_code");return a.success?o("WAResultOrError").makeResult({bizPricingBusinessCountryCode:a.value}):a}l.parseAckPaidGroupConversationMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);