const map = { id: "WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsAddParticipantCountRateLimitMixin": require("./WASmaxInGroupsAddParticipantCountRateLimitMixin.js"),"WASmaxInGroupsAddParticipantTimeRateLimitMixin": require("./WASmaxInGroupsAddParticipantTimeRateLimitMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsAddParticipantTimeRateLimitMixin").parseAddParticipantTimeRateLimitMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"AddParticipantTimeRateLimit",value:t.value});var n=o("WASmaxInGroupsAddParticipantCountRateLimitMixin").parseAddParticipantCountRateLimitMixin(e);return n.success?o("WAResultOrError").makeResult({name:"AddParticipantCountRateLimit",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["AddParticipantTimeRateLimit","AddParticipantCountRateLimit"],[t,n])}l.parseAddParticipantTimeOrCountRateLimitMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);