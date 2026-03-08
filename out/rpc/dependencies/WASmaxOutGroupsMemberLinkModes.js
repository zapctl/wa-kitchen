const map = { id: "WASmaxOutGroupsMemberLinkModes" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutGroupsAdminLinkModeMixin": require("./WASmaxOutGroupsAdminLinkModeMixin.js"),"WASmaxOutGroupsAllMembersLinkModeMixin": require("./WASmaxOutGroupsAllMembersLinkModeMixin.js"),"WASmaxOutGroupsUnknownLinkModeMixin": require("./WASmaxOutGroupsUnknownLinkModeMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.isAdminLinkMode)return o("WASmaxOutGroupsAdminLinkModeMixin").mergeAdminLinkModeMixin(e);if(t.isAllMembersLinkMode)return o("WASmaxOutGroupsAllMembersLinkModeMixin").mergeAllMembersLinkModeMixin(e);if(t.unknownLinkMode)return o("WASmaxOutGroupsUnknownLinkModeMixin").mergeUnknownLinkModeMixin(e,t.unknownLinkMode);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMemberLinkModes=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);