const map = { id: "WASmaxOutOfflineBatchRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.offlineBatchCount,n=o("WASmaxJsx").smax("ib",null,o("WASmaxJsx").smax("offline_batch",{count:o("WAWap").INT(t)}));return n}l.makeBatchRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);