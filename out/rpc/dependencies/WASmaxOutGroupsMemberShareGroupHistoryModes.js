const map = { id: "WASmaxOutGroupsMemberShareGroupHistoryModes" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutGroupsAdminShareModeMixin": require("./WASmaxOutGroupsAdminShareModeMixin.js"),"WASmaxOutGroupsAllMembersShareModeMixin": require("./WASmaxOutGroupsAllMembersShareModeMixin.js"),"WASmaxOutGroupsUnknownShareModeMixin": require("./WASmaxOutGroupsUnknownShareModeMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.isAdminShareMode)return o("WASmaxOutGroupsAdminShareModeMixin").mergeAdminShareModeMixin(e);if(t.isAllMembersShareMode)return o("WASmaxOutGroupsAllMembersShareModeMixin").mergeAllMembersShareModeMixin(e);if(t.unknownShareMode)return o("WASmaxOutGroupsUnknownShareModeMixin").mergeUnknownShareModeMixin(e,t.unknownShareMode);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMemberShareGroupHistoryModes=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);