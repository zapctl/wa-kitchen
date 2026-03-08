const map = { id: "WASmaxOutGroupsBaseGetGroupOrServerMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutGroupsBaseGetGroupMixin": require("./WASmaxOutGroupsBaseGetGroupMixin.js"),"WASmaxOutGroupsBaseGetServerMixin": require("./WASmaxOutGroupsBaseGetServerMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.baseGetGroup)return o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(e,t.baseGetGroup);if(t.isBaseGetServer)return o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(e);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeBaseGetGroupOrServerMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);