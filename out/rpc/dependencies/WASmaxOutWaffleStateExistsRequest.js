const map = { id: "WASmaxOutWaffleStateExistsRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutWaffleBaseIQGetRequestMixin": require("./WASmaxOutWaffleBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.timestampElementValue,n=o("WASmaxOutWaffleBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"waffle",smax_id:o("WAWap").INT(142),to:o("WAWap").S_WHATSAPP_NET},o("WASmaxJsx").smax("timestamp",null,o("WAWap").INT(t))));return n}l.makeStateExistsRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);