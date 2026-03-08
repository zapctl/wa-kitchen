const map = { id: "WAResultOrError" };
const exports = module.exports = {};
const dependencies = {};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i){"use strict";function e(e,t){return t!=null?{success:!1,error:e,payload:t}:{success:!1,error:e}}function l(e){return{success:!0,value:e}}function s(e){return{success:!1,error:e}}i.DEPRECATED_makeError=e,i.makeResult=l,i.makeError=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);