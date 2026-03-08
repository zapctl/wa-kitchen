const map = { id: "WASmaxOutSpamMessagePayloadTypes" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutSpamMessageWithPaymentReportMixin": require("./WASmaxOutSpamMessageWithPaymentReportMixin.js"),"WASmaxOutSpamMessageWithPollMixin": require("./WASmaxOutSpamMessageWithPollMixin.js"),"WASmaxOutSpamMessageWithTypeMixin": require("./WASmaxOutSpamMessageWithTypeMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.messageWithPaymentReport)return o("WASmaxOutSpamMessageWithPaymentReportMixin").mergeMessageWithPaymentReportMixin(e,t.messageWithPaymentReport);if(t.messageWithType)return o("WASmaxOutSpamMessageWithTypeMixin").mergeMessageWithTypeMixin(e,t.messageWithType);if(t.messageWithPoll)return o("WASmaxOutSpamMessageWithPollMixin").mergeMessageWithPollMixin(e,t.messageWithPoll);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMessagePayloadTypes=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);