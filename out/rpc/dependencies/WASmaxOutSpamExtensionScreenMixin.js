const map = { id: "WASmaxOutSpamExtensionScreenMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t,n=e.extensionScreenExtensionId,r=e.extensionScreenSessionId,a=e.extensionScreenT,i=e.extensionScreenName,l=e.extensionScreenEntryPoint,s=e.dataElementValue,u=o("WASmaxJsx").smax("extension_screen",{extension_id:(t=o("WAWap")).CUSTOM_STRING(n),session_id:t.CUSTOM_STRING(r),t:t.INT(a),name:t.CUSTOM_STRING(i),entry_point:o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING,l)},o("WASmaxJsx").smax("data",null,s));return u}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeExtensionScreenMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);