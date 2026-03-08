const map = { id: "WASmaxOutSpamBaseReportMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.spamListSpamFlow,n=o("WASmaxJsx").smax("iq",{to:o("WAWap").S_WHATSAPP_NET,xmlns:"spam"},o("WASmaxJsx").smax("spam_list",{spam_flow:o("WAWap").CUSTOM_STRING(t)}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeBaseReportMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);