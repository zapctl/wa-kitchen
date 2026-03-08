const map = { id: "WASmaxOutNewslettersQueryNewsletterParamsMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutNewslettersQueryNewsletterParams": require("./WASmaxOutNewslettersQueryNewsletterParams.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.queryNewsletterParamsArgs,n=o("WASmaxOutNewslettersQueryNewsletterParams").mergeQueryNewsletterParams(o("WASmaxJsx").smax("smax$any",null),t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeQueryNewsletterParamsMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);