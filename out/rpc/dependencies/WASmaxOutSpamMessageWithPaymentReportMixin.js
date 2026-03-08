const map = { id: "WASmaxOutSpamMessageWithPaymentReportMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutSpamContentTypePayMixin": require("./WASmaxOutSpamContentTypePayMixin.js"),"WASmaxOutSpamReportPayNodeMixin": require("./WASmaxOutSpamReportPayNodeMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.reportPayNodeMixinArgs,n=o("WASmaxOutSpamContentTypePayMixin").mergeContentTypePayMixin(o("WASmaxJsx").smax("message",null,o("WASmaxOutSpamReportPayNodeMixin").mergeReportPayNodeMixin(o("WASmaxJsx").smax("pay",null),t)));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeMessageWithPaymentReportMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);