const map = { id: "WASmaxOutGroupsUnknownAddModeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.memberAddModeElementValue,n=o("WASmaxJsx").smax("member_add_mode",null,t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeUnknownAddModeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);