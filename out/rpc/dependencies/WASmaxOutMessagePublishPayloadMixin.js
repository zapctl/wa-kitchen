const map = { id: "WASmaxOutMessagePublishPayloadMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.plaintextElementValue,n=o("WASmaxJsx").smax("plaintext",null,t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergePayloadMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);