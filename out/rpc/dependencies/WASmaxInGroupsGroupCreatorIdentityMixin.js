const map = { id: "WASmaxInGroupsGroupCreatorIdentityMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGroupCreatorCountryCodeMixin": require("./WASmaxInGroupsGroupCreatorCountryCodeMixin.js"),"WASmaxInGroupsGroupCreatorPhoneNumberMixin": require("./WASmaxInGroupsGroupCreatorPhoneNumberMixin.js"),"WASmaxInGroupsGroupCreatorUsernameMixin": require("./WASmaxInGroupsGroupCreatorUsernameMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsGroupCreatorPhoneNumberMixin").parseGroupCreatorPhoneNumberMixin(e),n=o("WASmaxInGroupsGroupCreatorUsernameMixin").parseGroupCreatorUsernameMixin(e),r=o("WASmaxInGroupsGroupCreatorCountryCodeMixin").parseGroupCreatorCountryCodeMixin(e);return o("WAResultOrError").makeResult({groupCreatorPhoneNumberMixin:t.success?t.value:null,groupCreatorUsernameMixin:n.success?n.value:null,groupCreatorCountryCodeMixin:r.success?r.value:null})}l.parseGroupCreatorIdentityMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);