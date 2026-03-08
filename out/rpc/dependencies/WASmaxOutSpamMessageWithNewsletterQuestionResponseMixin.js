const map = { id: "WASmaxOutSpamMessageWithNewsletterQuestionResponseMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.messageServerId,n=e.messageResponseServerId,r=o("WASmaxJsx").smax("message",{server_id:o("WAWap").INT(t),response_server_id:o("WAWap").CUSTOM_STRING(n)});return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeMessageWithNewsletterQuestionResponseMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);