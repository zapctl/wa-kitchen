const map = { id: "WASmaxWaffleGetCertificateRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInWaffleGetCertificateResponseError": require("./dependencies/WASmaxInWaffleGetCertificateResponseError.js"),"WASmaxInWaffleGetCertificateResponseSuccess": require("./dependencies/WASmaxInWaffleGetCertificateResponseSuccess.js"),"WASmaxOutWaffleGetCertificateRequest": require("./dependencies/WASmaxOutWaffleGetCertificateRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutWaffleGetCertificateRequest").makeGetCertificateRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInWaffleGetCertificateResponseSuccess").parseGetCertificateResponseSuccess(r,n);if(a.success)return{name:"GetCertificateResponseSuccess",value:a.value};var i=o("WASmaxInWaffleGetCertificateResponseError").parseGetCertificateResponseError(r,n);if(i.success)return{name:"GetCertificateResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetCertificate",{Success:a,Error:i}))}),s.apply(this,arguments)}l.sendGetCertificateRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendGetCertificateRPC": exports["sendGetCertificateRPC"]};