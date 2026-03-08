const map = { id: "WASmaxOutPassiveModePassiveIQRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("iq",{id:o("WAWap").generateId(),type:"set",xmlns:"passive",to:o("WAWap").S_WHATSAPP_NET},o("WASmaxJsx").smax("passive",null));return e}l.makePassiveIQRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);