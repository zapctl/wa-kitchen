const map = { id: "WASmaxOutGroupsUnknownLinkModeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.memberLinkModeElementValue,n=o("WASmaxJsx").smax("member_link_mode",null,t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeUnknownLinkModeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);