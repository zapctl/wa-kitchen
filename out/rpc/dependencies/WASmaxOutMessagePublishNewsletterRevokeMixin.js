const map = { id: "WASmaxOutMessagePublishNewsletterRevokeMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishAdminRevokeMixin": require("./WASmaxOutMessagePublishAdminRevokeMixin.js"),"WASmaxOutMessagePublishContentTypeTextMixin": require("./WASmaxOutMessagePublishContentTypeTextMixin.js"),"WASmaxOutMessagePublishWAMOSubMixin": require("./WASmaxOutMessagePublishWAMOSubMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasWAMOSub,n=o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(o("WASmaxOutMessagePublishAdminRevokeMixin").mergeAdminRevokeMixin(o("WASmaxJsx").smax("message",null,o("WASmaxJsx").smax("plaintext",null)))),t);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterRevokeMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);