const map = { id: "WASmaxOutMdCompanionPlatformIdElMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.companionPlatformIdElementValue,n=o("WASmaxJsx").smax("companion_platform_id",null,t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeCompanionPlatformIdElMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);