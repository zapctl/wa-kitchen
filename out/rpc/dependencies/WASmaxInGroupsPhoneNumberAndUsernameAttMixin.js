const map = { id: "WASmaxInGroupsPhoneNumberAndUsernameAttMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsPhoneNumberMixin": require("./WASmaxInGroupsPhoneNumberMixin.js"),"WASmaxInGroupsUsernameAttMixin": require("./WASmaxInGroupsUsernameAttMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);if(!t.success)return t;var n=o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);return n.success?o("WAResultOrError").makeResult(babelHelpers.extends({},t.value,n.value)):n}l.parsePhoneNumberAndUsernameAttMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);