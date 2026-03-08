const map = { id: "WASmaxInProfilePictureGetResponseSuccessNoData" };
const exports = module.exports = {};
const dependencies = {"WASmaxInProfilePictureIQResultResponseMixin": require("./WASmaxInProfilePictureIQResultResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInProfilePictureIQResultResponseMixin").parseIQResultResponseMixin(e,t);return r.success,r}l.parseGetResponseSuccessNoData=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);