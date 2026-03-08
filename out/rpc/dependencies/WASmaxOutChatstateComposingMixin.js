const map = { id: "WASmaxOutChatstateComposingMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasComposingMediaAudio,n=o("WASmaxJsx").smax("chatstate",null,o("WASmaxJsx").smax("composing",{media:o("WASmaxAttrs").OPTIONAL_LITERAL("audio",t)}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeComposingMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);