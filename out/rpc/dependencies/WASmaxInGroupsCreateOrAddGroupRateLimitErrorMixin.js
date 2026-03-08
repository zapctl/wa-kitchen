const map = { id: "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup": require("./WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"error");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"rate_limit");if(!n.success)return n;var r=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"text","rate-overlimit");if(!r.success)return r;var a=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt,e,"code",429);if(!a.success)return a;var i=o("WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup").parseAddParticipantTimeOrCountRateLimitMixinGroup(n.value);return i.success?o("WAResultOrError").makeResult({text:r.value,code:a.value,rateLimitAddParticipantTimeOrCountRateLimitMixinGroup:i.value}):i}l.parseCreateOrAddGroupRateLimitErrorMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);