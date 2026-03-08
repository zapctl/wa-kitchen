const map = { id: "WABaseGlobals" };
const exports = module.exports = {};
const dependencies = {"err": require("./err.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){"use strict";var e=null;function s(t){e=t}function u(){if(e==null)throw r("err")("Trying to access WAGlobals before being set");return e}function c(e){var t=u();t.myJids=e}function d(){var e,t=(e=u().myJids)==null?void 0:e.deviceJid;if(t==null)throw r("err")("Trying to access myDeviceJid, but it's not set");return t}function m(){var e,t=(e=u().myJids)==null?void 0:e.userJid;if(t==null)throw r("err")("Trying to access myUserJid, but it's not set");return t}function p(){return u().jidUtils}function _(){return u().qpl}function f(){return e==null?!1:u().newClockSkewCalculation()}l.setGlobals=s,l.setMyJids=c,l.getMyDeviceJid=d,l.getMyUserJid=m,l.getJidUtilsApi=p,l.getQplConfig=_,l.newClockSkewCalculation=f})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);