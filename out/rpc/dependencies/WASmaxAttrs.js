const map = { id: "WASmaxAttrs" };
const exports = module.exports = {};
const dependencies = {"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){"use strict";function e(e,t){return t==null?o("WAWap").DROP_ATTR:e(t)}function s(e,t){return t?e:o("WAWap").DROP_ATTR}l.OPTIONAL=e,l.OPTIONAL_LITERAL=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);