const map = { id: "WASmaxOutWaffleWFPingRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutWaffleBaseIQGetRequestMixin": require("./WASmaxOutWaffleBaseIQGetRequestMixin.js"),"WASmaxOutWaffleRSAEncryptionMetadataMixin": require("./WASmaxOutWaffleRSAEncryptionMetadataMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t,n=e.rSAEncryptionMetadataMixinArgs,r=e.timestampElementValue,a=e.fbidElementValue,i=o("WASmaxOutWaffleBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin((t=o("WASmaxJsx")).smax("iq",{xmlns:"waffle",smax_id:o("WAWap").INT(83),to:o("WAWap").S_WHATSAPP_NET},o("WASmaxOutWaffleRSAEncryptionMetadataMixin").mergeRSAEncryptionMetadataMixin(t.smax("encryption_metadata",null),n),t.smax("timestamp",null,o("WAWap").INT(r)),t.smax("fbid",null,a)));return i}l.makeWFPingRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);