const map = { id: "WASmaxOutInAppCommsEventRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutInAppCommsBaseIQSetRequestMixin": require("./WASmaxOutInAppCommsBaseIQSetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t,n=e.eventPromotionId,r=e.eventType,a=e.eventTimestampSec,i=e.eventLogdata,l=o("WASmaxOutInAppCommsBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"w:comms",to:(t=o("WAWap")).S_WHATSAPP_NET},o("WASmaxJsx").smax("event",{promotion_id:t.CUSTOM_STRING(n),type:t.CUSTOM_STRING(r),timestamp_sec:t.INT(a),logdata:t.CUSTOM_STRING(i)})));return l}l.makeEventRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);