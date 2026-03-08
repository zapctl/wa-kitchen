const map = { id: "WASmaxOutPushConfigAndroidClientMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutPushConfigAndroidClientConfigMixin": require("./WASmaxOutPushConfigAndroidClientConfigMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.itemJid,n=e.itemMute,r=o("WASmaxJsx").smax("item",{jid:o("WAWap").GROUP_JID(t),mute:o("WAWap").INT(n)});return r}function s(t){var n=t.itemArgs,r=o("WASmaxOutPushConfigAndroidClientConfigMixin").mergeAndroidClientConfigMixin(o("WASmaxJsx").smax("config",null,o("WASmaxChildren").REPEATED_CHILD(e,n,0,1/0)),t);return r}function u(e,t){var n=s(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeAndroidClientItem=e,l.mergeAndroidClientMixin=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);