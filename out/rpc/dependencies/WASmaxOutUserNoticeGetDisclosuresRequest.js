const map = { id: "WASmaxOutUserNoticeGetDisclosuresRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutUserNoticeBaseIQGetRequestMixin": require("./WASmaxOutUserNoticeBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.getUserDisclosuresT,n=o("WASmaxOutUserNoticeBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").S_WHATSAPP_NET,xmlns:"tos"},o("WASmaxJsx").smax("get_user_disclosures",{t:o("WAWap").INT(t)})));return n}l.makeGetDisclosuresRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);