const map = { id: "WASmaxPassiveModeActiveIQRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInPassiveModeActiveIQResponseSuccess": require("./dependencies/WASmaxInPassiveModeActiveIQResponseSuccess.js"),"WASmaxOutPassiveModeActiveIQRequest": require("./dependencies/WASmaxOutPassiveModeActiveIQRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e){var t=o("WASmaxOutPassiveModeActiveIQRequest").makeActiveIQRequest(),n=yield o("WAComms").sendSmaxStanza(t,e),r=o("WASmaxInPassiveModeActiveIQResponseSuccess").parseActiveIQResponseSuccess(n,t);if(r.success)return{name:"ActiveIQResponseSuccess",value:r.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ActiveIQ",{Success:r}))}),s.apply(this,arguments)}l.sendActiveIQRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendActiveIQRPC": exports["sendActiveIQRPC"]};