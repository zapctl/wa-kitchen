const map = { id: "WASmaxPresenceAvailabilityRPC" };
const exports = {};
const dependencies = {"WAComms": require("./dependencies/WAComms.js"),"WASmaxOutPresenceAvailabilityRequest": require("./dependencies/WASmaxOutPresenceAvailabilityRequest.js"),"asyncToGeneratorRuntime": require("./dependencies/asyncToGeneratorRuntime.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){return s.apply(this,arguments)}function s(){return s=n("asyncToGeneratorRuntime").asyncToGenerator(function*(e){var t=o("WASmaxOutPresenceAvailabilityRequest").makeAvailabilityRequest(e);yield o("WAComms").castSmaxStanza(t)}),s.apply(this,arguments)}l.sendAvailabilityRPC=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);

module.exports = {"sendAvailabilityRPC": exports["sendAvailabilityRPC"]};