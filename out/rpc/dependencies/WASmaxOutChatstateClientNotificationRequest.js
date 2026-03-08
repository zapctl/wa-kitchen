const map = { id: "WASmaxOutChatstateClientNotificationRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutChatstateInternalTestMixin": require("./WASmaxOutChatstateInternalTestMixin.js"),"WASmaxOutChatstateStateTypes": require("./WASmaxOutChatstateStateTypes.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.chatstateTo,n=e.internalTestMixinArgs,r=e.stateTypesArgs,a=o("WASmaxOutChatstateStateTypes").mergeStateTypes(o("WASmaxMixins").optionalMerge(o("WASmaxOutChatstateInternalTestMixin").mergeInternalTestMixin,o("WASmaxJsx").smax("chatstate",{to:o("WAWap").JID(t)}),n),r);return a}l.makeClientNotificationRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);