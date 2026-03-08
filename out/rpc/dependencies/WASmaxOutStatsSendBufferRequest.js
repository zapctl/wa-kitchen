const map = { id: "WASmaxOutStatsSendBufferRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutStatsBaseIQSetRequestMixin": require("./WASmaxOutStatsBaseIQSetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.addT,n=e.addElementValue,r=o("WASmaxOutStatsBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"w:stats",to:o("WAWap").S_WHATSAPP_NET},o("WASmaxJsx").smax("add",{t:o("WAWap").INT(t)},n)));return r}l.makeSendBufferRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);