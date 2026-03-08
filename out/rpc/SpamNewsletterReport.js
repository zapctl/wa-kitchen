const map = { id: "WASmaxSpamNewsletterReportRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInSpamNewsletterReportResponseError": require("./dependencies/WASmaxInSpamNewsletterReportResponseError.js"),"WASmaxInSpamNewsletterReportResponseSuccess": require("./dependencies/WASmaxInSpamNewsletterReportResponseSuccess.js"),"WASmaxOutSpamNewsletterReportRequest": require("./dependencies/WASmaxOutSpamNewsletterReportRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutSpamNewsletterReportRequest").makeNewsletterReportRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInSpamNewsletterReportResponseSuccess").parseNewsletterReportResponseSuccess(r,n);if(a.success)return{name:"NewsletterReportResponseSuccess",value:a.value};var i=o("WASmaxInSpamNewsletterReportResponseError").parseNewsletterReportResponseError(r,n);if(i.success)return{name:"NewsletterReportResponseError",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("NewsletterReport",{Success:a,Error:i}))}),s.apply(this,arguments)}l.sendNewsletterReportRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendNewsletterReportRPC": exports["sendNewsletterReportRPC"]};