const map = { id: "WASmaxPsaChatBlockGetRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInPsaChatBlockGetResponseServerError": require("./dependencies/WASmaxInPsaChatBlockGetResponseServerError.js"),"WASmaxInPsaChatBlockGetResponseSuccess": require("./dependencies/WASmaxInPsaChatBlockGetResponseSuccess.js"),"WASmaxOutPsaChatBlockGetRequest": require("./dependencies/WASmaxOutPsaChatBlockGetRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e){var t=o("WASmaxOutPsaChatBlockGetRequest").makeChatBlockGetRequest(),n=yield o("WAComms").sendSmaxStanza(t,e),r=o("WASmaxInPsaChatBlockGetResponseSuccess").parseChatBlockGetResponseSuccess(n,t);if(r.success)return{name:"ChatBlockGetResponseSuccess",value:r.value};var a=o("WASmaxInPsaChatBlockGetResponseServerError").parseChatBlockGetResponseServerError(n,t);if(a.success)return{name:"ChatBlockGetResponseServerError",value:a.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ChatBlockGet",{Success:r,ServerError:a}))}),s.apply(this,arguments)}l.sendChatBlockGetRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendChatBlockGetRPC": exports["sendChatBlockGetRPC"]};