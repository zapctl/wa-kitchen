const map = { id: "WASmaxSpamIndividualReportRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInSpamIndividualReportResponseError": require("./dependencies/WASmaxInSpamIndividualReportResponseError.js"),"WASmaxInSpamIndividualReportResponseSuccess": require("./dependencies/WASmaxInSpamIndividualReportResponseSuccess.js"),"WASmaxOutSpamIndividualReportRequest": require("./dependencies/WASmaxOutSpamIndividualReportRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutSpamIndividualReportRequest").makeIndividualReportRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInSpamIndividualReportResponseSuccess").parseIndividualReportResponseSuccess(r,n);if(a.success)return{name:"IndividualReportResponseSuccess",value:a.value};var i=o("WASmaxInSpamIndividualReportResponseError").parseIndividualReportResponseError(r,n);if(i.success)return{name:"IndividualReportResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("IndividualReport",{Success:a,Error:i}))}),s.apply(this,arguments)}l.sendIndividualReportRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendIndividualReportRPC": exports["sendIndividualReportRPC"]};