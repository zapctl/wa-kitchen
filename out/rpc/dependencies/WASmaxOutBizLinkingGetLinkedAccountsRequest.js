const map = { id: "WASmaxOutBizLinkingGetLinkedAccountsRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutBizLinkingHackBaseIQGetRequestMixin": require("./WASmaxOutBizLinkingHackBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutBizLinkingHackBaseIQGetRequestMixin").mergeHackBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"fb:thrift_iq",smax_id:o("WAWap").INT(42)},o("WASmaxJsx").smax("linked_accounts",null)),e);return t}l.makeGetLinkedAccountsRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);