const map = { id: "WASmaxOutSpamClientFrankingTagMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.frankingTagElementValue,n=o("WASmaxJsx").smax("smax$any",null,o("WASmaxJsx").smax("franking",null,o("WASmaxJsx").smax("franking_tag",null,t)));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeClientFrankingTagMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);