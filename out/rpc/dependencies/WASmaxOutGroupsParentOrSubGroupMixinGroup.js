const map = { id: "WASmaxOutGroupsParentOrSubGroupMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutGroupsParentGroupMixin": require("./WASmaxOutGroupsParentGroupMixin.js"),"WASmaxOutGroupsSubGroupMixin": require("./WASmaxOutGroupsSubGroupMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.parentGroup)return o("WASmaxOutGroupsParentGroupMixin").mergeParentGroupMixin(e,t.parentGroup);if(t.subGroup)return o("WASmaxOutGroupsSubGroupMixin").mergeSubGroupMixin(e,t.subGroup);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeParentOrSubGroupMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);