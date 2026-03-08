const map = { id: "WASmaxInGroupsMembershipRequestsActionResponseServerError" };
const exports = module.exports = {};
const dependencies = {"WASmaxInGroupsBaseServerErrorMixin": require("./WASmaxInGroupsBaseServerErrorMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(e,t);return r.success,r}l.parseMembershipRequestsActionResponseServerError=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);