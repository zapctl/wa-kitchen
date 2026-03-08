const map = { id: "WASmaxPassiveModePassiveIQRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInPassiveModePassiveIQResponseSuccess": require("./dependencies/WASmaxInPassiveModePassiveIQResponseSuccess.js"),"WASmaxOutPassiveModePassiveIQRequest": require("./dependencies/WASmaxOutPassiveModePassiveIQRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e){var t=o("WASmaxOutPassiveModePassiveIQRequest").makePassiveIQRequest(),n=yield o("WAComms").sendSmaxStanza(t,e),r=o("WASmaxInPassiveModePassiveIQResponseSuccess").parsePassiveIQResponseSuccess(n,t);if(r.success)return{name:"PassiveIQResponseSuccess",value:r.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PassiveIQ",{Success:r}))}),s.apply(this,arguments)}l.sendPassiveIQRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendPassiveIQRPC": exports["sendPassiveIQRPC"]};