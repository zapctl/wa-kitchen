const map = { id: "WASmaxPresenceSubscribeRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxOutPresenceSubscribeRequest": require("./dependencies/WASmaxOutPresenceSubscribeRequest.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e){var t=o("WASmaxOutPresenceSubscribeRequest").makeSubscribeRequest(e);yield o("WAComms").castSmaxStanza(t)}),s.apply(this,arguments)}l.sendSubscribeRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendSubscribeRPC": exports["sendSubscribeRPC"]};