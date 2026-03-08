const map = { id: "WASmaxOutBizCtwaAdAccountGetAccessTokenAndSessionCookiesRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin": require("./WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.codeElementValue,n=o("WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin").mergeHackBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"fb:thrift_iq",smax_id:o("WAWap").INT(104)},o("WASmaxJsx").smax("parameters",null,o("WASmaxJsx").smax("code",null,t))),e);return n}l.makeGetAccessTokenAndSessionCookiesRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);