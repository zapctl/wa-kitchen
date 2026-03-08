const map = { id: "WAAbortError" };
const exports = module.exports = {};
const dependencies = {"WACustomError": require("./WACustomError.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){"use strict";var e=(function(e){function t(t){var n;return n=e.call(this,t!=null?t:"")||this,n.name="AbortError",n}return babelHelpers.inheritsLoose(t,e),t})(o("WACustomError").CustomError),s="AbortError";function u(e){return function(t){if(t.name===s)return e(t);throw t}}l.AbortError=e,l.ABORT_ERROR=s,l.catchAbort=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);