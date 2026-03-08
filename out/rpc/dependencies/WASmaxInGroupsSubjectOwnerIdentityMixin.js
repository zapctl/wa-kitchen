const map = { id: "WASmaxInGroupsSubjectOwnerIdentityMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsSubjectOwnerPhoneNumberMixin": require("./WASmaxInGroupsSubjectOwnerPhoneNumberMixin.js"),"WASmaxInGroupsSubjectOwnerUsernameMixin": require("./WASmaxInGroupsSubjectOwnerUsernameMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsSubjectOwnerPhoneNumberMixin").parseSubjectOwnerPhoneNumberMixin(e),n=o("WASmaxInGroupsSubjectOwnerUsernameMixin").parseSubjectOwnerUsernameMixin(e);return o("WAResultOrError").makeResult({subjectOwnerPhoneNumberMixin:t.success?t.value:null,subjectOwnerUsernameMixin:n.success?n.value:null})}l.parseSubjectOwnerIdentityMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);