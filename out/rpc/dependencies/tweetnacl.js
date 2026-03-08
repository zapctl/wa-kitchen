const map = { id: "tweetnacl" };
const exports = module.exports = {};
const dependencies = {"tweetnacl-1.0.3": require("./tweetnacl-1.0.3.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i){"use strict";a.exports=n("tweetnacl-1.0.3")()})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);