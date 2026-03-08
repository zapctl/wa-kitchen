const map = { id: "WASmaxOutGroupsGetLinkedGroupRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseGetGroupMixin": require("./WASmaxOutGroupsBaseGetGroupMixin.js"),"WASmaxOutGroupsQueryLinkedGroupMixin": require("./WASmaxOutGroupsQueryLinkedGroupMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutGroupsQueryLinkedGroupMixin").mergeQueryLinkedGroupMixin(o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(o("WASmaxJsx").smax("iq",null),e),e);return t}l.makeGetLinkedGroupRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);