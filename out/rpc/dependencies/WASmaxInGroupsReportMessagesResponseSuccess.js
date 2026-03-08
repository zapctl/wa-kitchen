const map = { id: "WASmaxInGroupsReportMessagesResponseSuccess" };
const exports = module.exports = {};
const dependencies = {"WASmaxInGroupsIQResultResponseMixin": require("./WASmaxInGroupsIQResultResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(e,t);return r.success,r}l.parseReportMessagesResponseSuccess=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);