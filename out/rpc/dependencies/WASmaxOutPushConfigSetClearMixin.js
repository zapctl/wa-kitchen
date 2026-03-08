const map = { id: "WASmaxOutPushConfigSetClearMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.clearPlatform,n=o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("clear",{platform:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,t)}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeSetClearMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);