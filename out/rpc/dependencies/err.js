const map = { id: "err" };
const exports = module.exports = {};
const dependencies = {"fb-error": require("./fb-error.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){"use strict";l.default=r("fb-error").err})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);