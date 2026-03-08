const map = { id: "WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutNewslettersMessageUpdatesAfterMixinMixin": require("./WASmaxOutNewslettersMessageUpdatesAfterMixinMixin.js"),"WASmaxOutNewslettersMessageUpdatesBeforeMixinMixin": require("./WASmaxOutNewslettersMessageUpdatesBeforeMixinMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.messageUpdatesBeforeMixin)return o("WASmaxOutNewslettersMessageUpdatesBeforeMixinMixin").mergeMessageUpdatesBeforeMixinMixin(e,t.messageUpdatesBeforeMixin);if(t.messageUpdatesAfterMixin)return o("WASmaxOutNewslettersMessageUpdatesAfterMixinMixin").mergeMessageUpdatesAfterMixinMixin(e,t.messageUpdatesAfterMixin);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMessageUpdatesBeforeOrAfterMixinMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);