const map = { id: "WASmaxOutGroupsAdminAddModeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("member_add_mode",null,"admin_add");return e}function s(t){var n=e();return o("WASmaxMixins").mergeStanzas(t,n)}l.mergeAdminAddModeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);