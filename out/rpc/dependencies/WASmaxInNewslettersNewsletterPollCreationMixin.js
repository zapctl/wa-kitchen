const map = { id: "WASmaxInNewslettersNewsletterPollCreationMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersContentTypePollCreationMixin": require("./WASmaxInNewslettersContentTypePollCreationMixin.js"),"WASmaxInNewslettersPayloadMixin": require("./WASmaxInNewslettersPayloadMixin.js"),"WASmaxInNewslettersWAMOSubMixin": require("./WASmaxInNewslettersWAMOSubMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"plaintext");if(!n.success)return n;var r=o("WASmaxInNewslettersPayloadMixin").parsePayloadMixin(n.value);if(!r.success)return r;var a=o("WASmaxInNewslettersContentTypePollCreationMixin").parseContentTypePollCreationMixin(e);if(!a.success)return a;var i=o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);return o("WAResultOrError").makeResult(babelHelpers.extends({plaintextPayloadMixin:r.value},a.value,{wAMOSubMixin:i.success?i.value:null}))}l.parseNewsletterPollCreationMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);