const map = { id: "WASmaxOutPushConfigSetRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutPushConfigBaseIQSetRequestMixin": require("./WASmaxOutPushConfigBaseIQSetRequestMixin.js"),"WASmaxOutPushConfigSetSetConfigOrSetClearMixinGroup": require("./WASmaxOutPushConfigSetSetConfigOrSetClearMixinGroup.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.setSetConfigOrSetClearMixinGroupArgs,n=o("WASmaxOutPushConfigSetSetConfigOrSetClearMixinGroup").mergeSetSetConfigOrSetClearMixinGroup(o("WASmaxOutPushConfigBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq",{to:o("WAWap").S_WHATSAPP_NET,xmlns:"urn:xmpp:whatsapp:push"})),t);return n}l.makeSetRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);