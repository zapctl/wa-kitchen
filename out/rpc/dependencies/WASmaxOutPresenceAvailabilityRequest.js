const map = { id: "WASmaxOutPresenceAvailabilityRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.presenceType,n=e.presenceName,r=o("WASmaxJsx").smax("presence",{type:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,t),name:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,n)});return r}l.makeAvailabilityRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);