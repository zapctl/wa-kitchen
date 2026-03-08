const map = { id: "WASmaxInAppCommsEventRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInInAppCommsEventResponseError": require("./dependencies/WASmaxInInAppCommsEventResponseError.js"),"WASmaxInInAppCommsEventResponseSuccess": require("./dependencies/WASmaxInInAppCommsEventResponseSuccess.js"),"WASmaxOutInAppCommsEventRequest": require("./dependencies/WASmaxOutInAppCommsEventRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutInAppCommsEventRequest").makeEventRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInInAppCommsEventResponseSuccess").parseEventResponseSuccess(r,n);if(a.success)return{name:"EventResponseSuccess",value:a.value};var i=o("WASmaxInInAppCommsEventResponseError").parseEventResponseError(r,n);if(i.success)return{name:"EventResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Event",{Success:a,Error:i}))}),s.apply(this,arguments)}l.sendEventRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendEventRPC": exports["sendEventRPC"]};