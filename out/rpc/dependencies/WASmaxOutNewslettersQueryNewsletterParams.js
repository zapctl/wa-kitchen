const map = { id: "WASmaxOutNewslettersQueryNewsletterParams" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutNewslettersQueryNewsletterInviteParamsMixin": require("./WASmaxOutNewslettersQueryNewsletterInviteParamsMixin.js"),"WASmaxOutNewslettersQueryNewsletterJIDParamsMixin": require("./WASmaxOutNewslettersQueryNewsletterJIDParamsMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.queryNewsletterJIDParams)return o("WASmaxOutNewslettersQueryNewsletterJIDParamsMixin").mergeQueryNewsletterJIDParamsMixin(e,t.queryNewsletterJIDParams);if(t.queryNewsletterInviteParams)return o("WASmaxOutNewslettersQueryNewsletterInviteParamsMixin").mergeQueryNewsletterInviteParamsMixin(e,t.queryNewsletterInviteParams);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeQueryNewsletterParams=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);