const map = { id: "WASmaxOutPsaChatBlockGetRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutPsaBaseIQGetRequestMixin": require("./WASmaxOutPsaBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxOutPsaBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").S_WHATSAPP_NET,xmlns:"w:comms:chat"},o("WASmaxJsx").smax("query",null,o("WASmaxJsx").smax("blocking_status",null))));return e}l.makeChatBlockGetRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);