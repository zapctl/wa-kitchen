const map = { id: "WASmaxPsaChatBlockSetRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInPsaChatBlockSetResponseServerError": require("./dependencies/WASmaxInPsaChatBlockSetResponseServerError.js"),"WASmaxInPsaChatBlockSetResponseSuccess": require("./dependencies/WASmaxInPsaChatBlockSetResponseSuccess.js"),"WASmaxOutPsaChatBlockSetRequest": require("./dependencies/WASmaxOutPsaChatBlockSetRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutPsaChatBlockSetRequest").makeChatBlockSetRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInPsaChatBlockSetResponseSuccess").parseChatBlockSetResponseSuccess(r,n);if(a.success)return{name:"ChatBlockSetResponseSuccess",value:a.value};var i=o("WASmaxInPsaChatBlockSetResponseServerError").parseChatBlockSetResponseServerError(r,n);if(i.success)return{name:"ChatBlockSetResponseServerError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockSet",{Success:a,ServerError:i}))}),s.apply(this,arguments)}l.sendChatBlockSetRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendChatBlockSetRPC": exports["sendChatBlockSetRPC"]};