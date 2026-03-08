const map = { id: "WASmaxOutBlocklistsBlocklistIdentifierMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutBlocklistsBlocklistIds": require("./WASmaxOutBlocklistsBlocklistIds.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.blocklistIdsArgs,n=o("WASmaxOutBlocklistsBlocklistIds").mergeBlocklistIds(o("WASmaxJsx").smax("smax$any",null),t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeBlocklistIdentifierMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);