const map = { id: "WASmaxOutSpamReportPayNodeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t,n=e.payType,r=e.payId,a=e.paySender,i=e.payReceiver,l=o("WASmaxJsx").smax("pay",{type:(t=o("WAWap")).CUSTOM_STRING(n),id:o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING,r),sender:o("WASmaxAttrs").OPTIONAL(t.USER_JID,a),receiver:o("WASmaxAttrs").OPTIONAL(t.USER_JID,i)});return l}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeReportPayNodeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);