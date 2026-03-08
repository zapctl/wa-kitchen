const map = { id: "WASmaxBugReportingReportBugRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInBugReportingReportBugResponseError": require("./dependencies/WASmaxInBugReportingReportBugResponseError.js"),"WASmaxInBugReportingReportBugResponseSuccess": require("./dependencies/WASmaxInBugReportingReportBugResponseSuccess.js"),"WASmaxOutBugReportingReportBugRequest": require("./dependencies/WASmaxOutBugReportingReportBugRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutBugReportingReportBugRequest").makeReportBugRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInBugReportingReportBugResponseSuccess").parseReportBugResponseSuccess(r,n);if(a.success)return{name:"ReportBugResponseSuccess",value:a.value};var i=o("WASmaxInBugReportingReportBugResponseError").parseReportBugResponseError(r,n);if(i.success)return{name:"ReportBugResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("ReportBug",{Success:a,Error:i}))}),s.apply(this,arguments)}l.sendReportBugRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendReportBugRPC": exports["sendReportBugRPC"]};