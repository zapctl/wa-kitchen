const map = { id: "WASmaxOutPresenceSubscribeRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutPresenceTCTokenMixin": require("./WASmaxOutPresenceTCTokenMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.presenceTo,n=e.presenceName,r=e.presenceContext,a=e.tCTokenMixinArgs,i=o("WASmaxMixins").optionalMerge(o("WASmaxOutPresenceTCTokenMixin").mergeTCTokenMixin,o("WASmaxJsx").smax("presence",{type:"subscribe",to:o("WAWap").JID(t),name:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,n),context:o("WASmaxAttrs").OPTIONAL(o("WAWap").GROUP_JID,r)}),a);return i}l.makeSubscribeRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);