const map = { id: "WASmaxOutSpamExtensionScreenDataMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutSpamExtensionScreenMixin": require("./WASmaxOutSpamExtensionScreenMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutSpamExtensionScreenMixin").mergeExtensionScreenMixin(o("WASmaxJsx").smax("extension_screen",null),e);return t}function s(t){var n=t.extensionScreenArgs,r=o("WASmaxJsx").smax("message",null,o("WASmaxChildren").REPEATED_CHILD(e,n,1,100));return r}function u(e,t){var n=s(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeExtensionScreenDataExtensionScreen=e,l.mergeExtensionScreenDataMixin=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);