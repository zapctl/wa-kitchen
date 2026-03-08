const map = { id: "WASmaxWaffleWFPingRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInWaffleWFPingResponseError": require("./dependencies/WASmaxInWaffleWFPingResponseError.js"),"WASmaxInWaffleWFPingResponseSuccess": require("./dependencies/WASmaxInWaffleWFPingResponseSuccess.js"),"WASmaxOutWaffleWFPingRequest": require("./dependencies/WASmaxOutWaffleWFPingRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutWaffleWFPingRequest").makeWFPingRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInWaffleWFPingResponseSuccess").parseWFPingResponseSuccess(r,n);if(a.success)return{name:"WFPingResponseSuccess",value:a.value};var i=o("WASmaxInWaffleWFPingResponseError").parseWFPingResponseError(r,n);if(i.success)return{name:"WFPingResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("WFPing",{Success:a,Error:i}))}),s.apply(this,arguments)}l.sendWFPingRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendWFPingRPC": exports["sendWFPingRPC"]};