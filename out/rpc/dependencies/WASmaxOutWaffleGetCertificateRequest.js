const map = { id: "WASmaxOutWaffleGetCertificateRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutWaffleBaseIQGetRequestMixin": require("./WASmaxOutWaffleBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("payload_enc_certificates",null);return e}function s(){var e=o("WASmaxJsx").smax("password_pem",null);return e}function u(t){var n=t.hasPayloadEncCertificates,r=t.hasPasswordPem,a=t.timestampElementValue,i=o("WASmaxOutWaffleBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"waffle",smax_id:o("WAWap").INT(51),to:o("WAWap").S_WHATSAPP_NET},o("WASmaxJsx").smax("timestamp",null,o("WAWap").INT(a)),o("WASmaxChildren").HAS_OPTIONAL_CHILD(e,n),o("WASmaxChildren").HAS_OPTIONAL_CHILD(s,r)));return i}l.makeGetCertificateRequestPayloadEncCertificates=e,l.makeGetCertificateRequestPasswordPem=s,l.makeGetCertificateRequest=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);