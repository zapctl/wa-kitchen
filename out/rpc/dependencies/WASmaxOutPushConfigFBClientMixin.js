const map = { id: "WASmaxOutPushConfigFBClientMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.configAppid,n=e.configDeviceid,r=e.configFbid,a=o("WASmaxJsx").smax("config",{platform:"fb",appid:o("WAWap").CUSTOM_STRING(t),deviceid:o("WAWap").CUSTOM_STRING(n),fbid:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,r)});return a}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeFBClientMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);