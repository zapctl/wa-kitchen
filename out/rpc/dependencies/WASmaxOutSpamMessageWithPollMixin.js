const map = { id: "WASmaxOutSpamMessageWithPollMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutSpamContentTypePollCreationMixin": require("./WASmaxOutSpamContentTypePollCreationMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutSpamContentTypePollCreationMixin").mergeContentTypePollCreationMixin(o("WASmaxJsx").smax("message",null),e);return t}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeMessageWithPollMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);