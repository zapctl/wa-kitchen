const map = { id: "WASmaxOutSpamBizReportMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.bizApiReportKnownAccount,n=e.bizApiReportMessageReport,r=o("WASmaxJsx").smax("spam_list",null,o("WASmaxJsx").smax("biz_api_report",{known_account:o("WAWap").CUSTOM_STRING(t),message_report:o("WAWap").CUSTOM_STRING(n)}));return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeBizReportMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);