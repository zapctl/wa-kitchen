const map = { id: "WASmaxOutGroupsAcceptGroupAddRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseSetGroupMixin": require("./WASmaxOutGroupsBaseSetGroupMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.acceptCode,n=e.acceptExpiration,r=e.acceptAdmin,a=o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("accept",{code:o("WAWap").CUSTOM_STRING(t),expiration:o("WAWap").INT(n),admin:o("WAWap").USER_JID(r)})),e);return a}l.makeAcceptGroupAddRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);