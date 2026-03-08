const map = { id: "WASmaxOutSpamMessageWithTypeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutSpamContentTypeTextOrMediaMixinGroup": require("./WASmaxOutSpamContentTypeTextOrMediaMixinGroup.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.contentTypeTextOrMediaMixinGroupArgs,n=o("WASmaxOutSpamContentTypeTextOrMediaMixinGroup").mergeContentTypeTextOrMediaMixinGroup(o("WASmaxJsx").smax("message",null),t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeMessageWithTypeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);