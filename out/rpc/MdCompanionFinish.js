const map = { id: "WASmaxMdCompanionFinishRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInMdCompanionFinishResponseError": require("./dependencies/WASmaxInMdCompanionFinishResponseError.js"),"WASmaxInMdCompanionFinishResponseSuccess": require("./dependencies/WASmaxInMdCompanionFinishResponseSuccess.js"),"WASmaxOutMdCompanionFinishRequest": require("./dependencies/WASmaxOutMdCompanionFinishRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutMdCompanionFinishRequest").makeCompanionFinishRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInMdCompanionFinishResponseSuccess").parseCompanionFinishResponseSuccess(r,n);if(a.success)return{name:"CompanionFinishResponseSuccess",value:a.value};var i=o("WASmaxInMdCompanionFinishResponseError").parseCompanionFinishResponseError(r,n);if(i.success)return{name:"CompanionFinishResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionFinish",{Success:a,Error:i}))}),s.apply(this,arguments)}l.sendCompanionFinishRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendCompanionFinishRPC": exports["sendCompanionFinishRPC"]};