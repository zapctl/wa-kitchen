const map = { id: "WASmaxVoipLinkCreateRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxInVoipLinkCreateResponseLinkCreateAck": require("./dependencies/WASmaxInVoipLinkCreateResponseLinkCreateAck.js"),"WASmaxInVoipLinkCreateResponseLinkCreateNack": require("./dependencies/WASmaxInVoipLinkCreateResponseLinkCreateNack.js"),"WASmaxOutVoipLinkCreateRequest": require("./dependencies/WASmaxOutVoipLinkCreateRequest.js"),"WASmaxParsingFailure": require("./dependencies/WASmaxParsingFailure.js"),"WASmaxRpcUtils": require("./dependencies/WASmaxRpcUtils.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e,t){var n=o("WASmaxOutVoipLinkCreateRequest").makeLinkCreateRequest(e),r=yield o("WAComms").sendSmaxStanza(n,t),a=o("WASmaxInVoipLinkCreateResponseLinkCreateAck").parseLinkCreateResponseLinkCreateAck(r,n);if(a.success)return{name:"LinkCreateResponseLinkCreateAck",value:a.value};var i=o("WASmaxInVoipLinkCreateResponseLinkCreateNack").parseLinkCreateResponseLinkCreateNack(r,n);if(i.success)return{name:"LinkCreateResponseLinkCreateNack",value:i.value};throw new(o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("LinkCreate",{LinkCreateAck:a,LinkCreateNack:i}))}),s.apply(this,arguments)}l.sendLinkCreateRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendLinkCreateRPC": exports["sendLinkCreateRPC"]};