const map = { id: "WASmaxOutGroupsGetInviteGroupInfoRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutGroupsBaseGetServerMixin": require("./WASmaxOutGroupsBaseGetServerMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.inviteCode,n=o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("invite",{code:o("WAWap").CUSTOM_STRING(t)})));return n}l.makeGetInviteGroupInfoRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);