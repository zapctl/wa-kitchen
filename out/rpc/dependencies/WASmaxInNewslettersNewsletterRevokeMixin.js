const map = { id: "WASmaxInNewslettersNewsletterRevokeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersAdminRevokeMixin": require("./WASmaxInNewslettersAdminRevokeMixin.js"),"WASmaxInNewslettersContentTypeTextMixin": require("./WASmaxInNewslettersContentTypeTextMixin.js"),"WASmaxInNewslettersWAMOSubMixin": require("./WASmaxInNewslettersWAMOSubMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"plaintext");if(!n.success)return n;var r=o("WASmaxInNewslettersAdminRevokeMixin").parseAdminRevokeMixin(e);if(!r.success)return r;var a=o("WASmaxInNewslettersContentTypeTextMixin").parseContentTypeTextMixin(e);if(!a.success)return a;var i=o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);return o("WAResultOrError").makeResult(babelHelpers.extends({},r.value,a.value,{wAMOSubMixin:i.success?i.value:null}))}l.parseNewsletterRevokeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);