const map = { id: "WASmaxReceiptPublishViewRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInReceiptPublishViewResponseSuccess": require("./dependencies/WASmaxInReceiptPublishViewResponseSuccess.js"),"WASmaxOutReceiptPublishViewRequest": require("./dependencies/WASmaxOutReceiptPublishViewRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutReceiptPublishViewRequest").makePublishViewRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInReceiptPublishViewResponseSuccess").parsePublishViewResponseSuccess(r,n);if(a.success)return{name:"PublishViewResponseSuccess",value:a.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PublishView",{Success:a}))}),s.apply(this,arguments)}l.sendPublishViewRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendPublishViewRPC": exports["sendPublishViewRPC"]};