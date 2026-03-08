const map = { id: "WASmaxOutBizAccessTokenRequestSilentNonceRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutBizAccessTokenHackBaseIQGetRequestMixin": require("./WASmaxOutBizAccessTokenHackBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutBizAccessTokenHackBaseIQGetRequestMixin").mergeHackBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"fb:thrift_iq",smax_id:o("WAWap").INT(118)}),e);return t}l.makeRequestSilentNonceRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);