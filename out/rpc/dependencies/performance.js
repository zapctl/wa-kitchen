const map = { id: "performance" };
const exports = module.exports = {};
const dependencies = {};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i){"use strict";var e=t.performance||t.msPerformance||t.webkitPerformance||{},l=e;i.default=l})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);