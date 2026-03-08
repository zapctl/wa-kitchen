const map = { id: "WASmaxMessagePublishNewsletterRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInMessagePublishNewsletterResponseNegative": require("./dependencies/WASmaxInMessagePublishNewsletterResponseNegative.js"),"WASmaxInMessagePublishNewsletterResponseSuccess": require("./dependencies/WASmaxInMessagePublishNewsletterResponseSuccess.js"),"WASmaxOutMessagePublishNewsletterRequest": require("./dependencies/WASmaxOutMessagePublishNewsletterRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutMessagePublishNewsletterRequest").makeNewsletterRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInMessagePublishNewsletterResponseNegative").parseNewsletterResponseNegative(r,n);if(a.success)return{name:"NewsletterResponseNegative",value:a.value};var i=o("WASmaxInMessagePublishNewsletterResponseSuccess").parseNewsletterResponseSuccess(r,n);if(i.success)return{name:"NewsletterResponseSuccess",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Newsletter",{Negative:a,Success:i}))}),s.apply(this,arguments)}l.sendNewsletterRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendNewsletterRPC": exports["sendNewsletterRPC"]};