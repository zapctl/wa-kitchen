const map = { id: "WASmaxOutPushConfigWNSClientMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.configVersion,n=e.configId,r=o("WASmaxJsx").smax("config",{platform:"wns",version:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,t),id:o("WAWap").CUSTOM_STRING(n)});return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeWNSClientMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);