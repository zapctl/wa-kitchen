const map = { id: "WASmaxInGroupsParentOrSubGroupMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsParentGroupMixin": require("./WASmaxInGroupsParentGroupMixin.js"),"WASmaxInGroupsSubGroupMixin": require("./WASmaxInGroupsSubGroupMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsParentGroupMixin").parseParentGroupMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"ParentGroup",value:t.value});var n=o("WASmaxInGroupsSubGroupMixin").parseSubGroupMixin(e);return n.success?o("WAResultOrError").makeResult({name:"SubGroup",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["ParentGroup","SubGroup"],[t,n])}l.parseParentOrSubGroupMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);