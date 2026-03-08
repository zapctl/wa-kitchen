const map = { id: "WASmaxOutSpamTCTokenMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutSpamPrivacyTokenContentsMixin": require("./WASmaxOutSpamPrivacyTokenContentsMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.tctokenT,n=e.privacyTokenContentsMixinArgs,r=o("WASmaxJsx").smax("smax$any",null,o("WASmaxOutSpamPrivacyTokenContentsMixin").mergePrivacyTokenContentsMixin(o("WASmaxJsx").smax("tctoken",{t:o("WASmaxAttrs").OPTIONAL(o("WAWap").INT,t)}),n));return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeTCTokenMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);