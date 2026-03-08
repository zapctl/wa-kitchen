const map = { id: "WASmaxOutNewslettersAfterMixinMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.messagesAfter,n=o("WASmaxJsx").smax("messages",{after:o("WAWap").INT(t)});return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeAfterMixinMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);