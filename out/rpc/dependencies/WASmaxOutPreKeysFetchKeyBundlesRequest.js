const map = { id: "WASmaxOutPreKeysFetchKeyBundlesRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutPreKeysClientRequestMixin": require("./WASmaxOutPreKeysClientRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.userJid,n=e.hasUserReasonIdentity,r=o("WASmaxJsx").smax("user",{jid:o("WAWap").JID(t),reason:o("WASmaxAttrs").OPTIONAL_LITERAL("identity",n)});return r}function s(t){var n=t.userArgs,r=o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(o("WASmaxJsx").smax("iq",{type:"get"},o("WASmaxJsx").smax("key",null,o("WASmaxChildren").REPEATED_CHILD(e,n,1,1e5))));return r}l.makeFetchKeyBundlesRequestKeyUser=e,l.makeFetchKeyBundlesRequest=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);