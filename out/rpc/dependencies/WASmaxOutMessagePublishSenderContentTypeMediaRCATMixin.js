const map = { id: "WASmaxOutMessagePublishSenderContentTypeMediaRCATMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishContentTypeMediaMixin": require("./WASmaxOutMessagePublishContentTypeMediaMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.plaintextContentId,n=o("WASmaxOutMessagePublishContentTypeMediaMixin").mergeContentTypeMediaMixin(o("WASmaxJsx").smax("message",null,o("WASmaxJsx").smax("plaintext",{mediatype:"url",content_id:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,t)})));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeSenderContentTypeMediaRCATMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);