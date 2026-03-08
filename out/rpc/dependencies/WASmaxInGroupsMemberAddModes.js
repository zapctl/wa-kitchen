const map = { id: "WASmaxInGroupsMemberAddModes" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsAdminAddModeMixin": require("./WASmaxInGroupsAdminAddModeMixin.js"),"WASmaxInGroupsAllMembersAddModeMixin": require("./WASmaxInGroupsAllMembersAddModeMixin.js"),"WASmaxInGroupsUnknownAddModeMixin": require("./WASmaxInGroupsUnknownAddModeMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsAdminAddModeMixin").parseAdminAddModeMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"AdminAddMode",value:t.value});var n=o("WASmaxInGroupsAllMembersAddModeMixin").parseAllMembersAddModeMixin(e);if(n.success)return o("WAResultOrError").makeResult({name:"AllMembersAddMode",value:n.value});var r=o("WASmaxInGroupsUnknownAddModeMixin").parseUnknownAddModeMixin(e);return r.success?o("WAResultOrError").makeResult({name:"UnknownAddMode",value:r.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["AdminAddMode","AllMembersAddMode","UnknownAddMode"],[t,n,r])}l.parseMemberAddModes=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);