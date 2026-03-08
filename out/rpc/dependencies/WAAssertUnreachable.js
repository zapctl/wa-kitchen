const map = { id: "WAAssertUnreachable" };
const exports = module.exports = {};
const dependencies = {"err": require("./err.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){"use strict";function e(e){throw r("err")("Impossible value, the default statement should never be reached for value: "+e)}l.default=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);