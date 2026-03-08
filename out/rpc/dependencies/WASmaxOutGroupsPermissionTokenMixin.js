const map = { id: "WASmaxOutGroupsPermissionTokenMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsPrivacyTokenContentsMixin": require("./WASmaxOutGroupsPrivacyTokenContentsMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxJsx").smax("smax$any",null,o("WASmaxOutGroupsPrivacyTokenContentsMixin").mergePrivacyTokenContentsMixin(o("WASmaxJsx").smax("privacy",null),e));return t}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergePermissionTokenMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);