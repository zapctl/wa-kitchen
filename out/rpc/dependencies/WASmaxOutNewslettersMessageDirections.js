const map = { id: "WASmaxOutNewslettersMessageDirections" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutNewslettersAfterMixinMixin": require("./WASmaxOutNewslettersAfterMixinMixin.js"),"WASmaxOutNewslettersBeforeMixinMixin": require("./WASmaxOutNewslettersBeforeMixinMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.beforeMixin)return o("WASmaxOutNewslettersBeforeMixinMixin").mergeBeforeMixinMixin(e,t.beforeMixin);if(t.afterMixin)return o("WASmaxOutNewslettersAfterMixinMixin").mergeAfterMixinMixin(e,t.afterMixin);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMessageDirections=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);