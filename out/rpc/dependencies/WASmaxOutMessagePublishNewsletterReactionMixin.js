const map = { id: "WASmaxOutMessagePublishNewsletterReactionMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishContentTypeReactionMixin": require("./WASmaxOutMessagePublishContentTypeReactionMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.reactionCode,n=o("WASmaxOutMessagePublishContentTypeReactionMixin").mergeContentTypeReactionMixin(o("WASmaxJsx").smax("message",null,o("WASmaxJsx").smax("reaction",{code:o("WAWap").CUSTOM_STRING(t)})));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterReactionMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);