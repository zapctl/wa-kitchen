const map = { id: "WASmaxOutNewslettersMyAddOnsRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutNewslettersSelfIQGetRequestMixin": require("./WASmaxOutNewslettersSelfIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.myAddonsLimit,n=e.myAddonsJid,r=o("WASmaxOutNewslettersSelfIQGetRequestMixin").mergeSelfIQGetRequestMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("my_addons",{limit:o("WAWap").INT(t),jid:o("WASmaxAttrs").OPTIONAL(o("WAWap").JID,n)})));return r}l.makeMyAddOnsRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);