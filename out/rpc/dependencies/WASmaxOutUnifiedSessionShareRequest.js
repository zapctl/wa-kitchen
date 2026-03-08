const map = { id: "WASmaxOutUnifiedSessionShareRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.unifiedSessionId,n=o("WASmaxJsx").smax("ib",null,o("WASmaxJsx").smax("unified_session",{id:o("WAWap").CUSTOM_STRING(t)}));return n}l.makeShareRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);