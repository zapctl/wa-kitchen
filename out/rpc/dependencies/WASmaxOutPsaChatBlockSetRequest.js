const map = { id: "WASmaxOutPsaChatBlockSetRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutPsaBaseIQSetRequestMixin": require("./WASmaxOutPsaBaseIQSetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.blockingAction,n=o("WASmaxOutPsaBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").S_WHATSAPP_NET,xmlns:"w:comms:chat"},o("WASmaxJsx").smax("blocking",{action:o("WAWap").CUSTOM_STRING(t)})));return n}l.makeChatBlockSetRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);