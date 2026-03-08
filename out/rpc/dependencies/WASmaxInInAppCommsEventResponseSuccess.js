const map = { id: "WASmaxInInAppCommsEventResponseSuccess" };
const exports = module.exports = {};
const dependencies = {"WASmaxInInAppCommsIQResultResponseMixin": require("./WASmaxInInAppCommsIQResultResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInInAppCommsIQResultResponseMixin").parseIQResultResponseMixin(e,t);return r.success,r}l.parseEventResponseSuccess=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);