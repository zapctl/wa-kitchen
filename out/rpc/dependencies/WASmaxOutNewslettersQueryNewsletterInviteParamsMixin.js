const map = { id: "WASmaxOutNewslettersQueryNewsletterInviteParamsMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.anyKey,n=e.anyViewRole,r=o("WASmaxJsx").smax("smax$any",{type:"invite",key:o("WAWap").CUSTOM_STRING(t),view_role:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,n)});return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeQueryNewsletterInviteParamsMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);