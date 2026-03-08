const map = { id: "WASmaxOutAbPropsGetGroupExperimentConfigRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutAbPropsBaseIQGetRequestMixin": require("./WASmaxOutAbPropsBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.propsGroup,n=e.propsHash,r=o("WASmaxOutAbPropsBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"abt",to:o("WAWap").S_WHATSAPP_NET},o("WASmaxJsx").smax("props",{group:o("WAWap").GROUP_JID(t),hash:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,n)})));return r}l.makeGetGroupExperimentConfigRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);