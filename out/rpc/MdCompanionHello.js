const map = { id: "WASmaxMdCompanionHelloRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInMdCompanionHelloResponseError": require("./dependencies/WASmaxInMdCompanionHelloResponseError.js"),"WASmaxInMdCompanionHelloResponseNotifyCompanion": require("./dependencies/WASmaxInMdCompanionHelloResponseNotifyCompanion.js"),"WASmaxOutMdCompanionHelloRequest": require("./dependencies/WASmaxOutMdCompanionHelloRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutMdCompanionHelloRequest").makeCompanionHelloRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInMdCompanionHelloResponseNotifyCompanion").parseCompanionHelloResponseNotifyCompanion(r,n);if(a.success)return{name:"CompanionHelloResponseNotifyCompanion",value:a.value};var i=o("WASmaxInMdCompanionHelloResponseError").parseCompanionHelloResponseError(r,n);if(i.success)return{name:"CompanionHelloResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionHello",{NotifyCompanion:a,Error:i}))}),s.apply(this,arguments)}l.sendCompanionHelloRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendCompanionHelloRPC": exports["sendCompanionHelloRPC"]};