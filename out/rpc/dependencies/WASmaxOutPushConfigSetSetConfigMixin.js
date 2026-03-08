const map = { id: "WASmaxOutPushConfigSetSetConfigMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutPushConfigConfigMixins": require("./WASmaxOutPushConfigConfigMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.configMixinsArgs,n=o("WASmaxJsx").smax("iq",null,o("WASmaxOutPushConfigConfigMixins").mergeConfigMixins(o("WASmaxJsx").smax("config",null),t));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeSetSetConfigMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);