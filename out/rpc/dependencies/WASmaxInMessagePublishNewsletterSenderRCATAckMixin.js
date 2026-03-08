const map = { id: "WASmaxInMessagePublishNewsletterSenderRCATAckMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"ack");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"rcat");if(!n.success)return n;var r=o("WASmaxParseUtils").contentBytes(n.value);return r.success?o("WAResultOrError").makeResult({rcatElementValue:r.value}):r}l.parseNewsletterSenderRCATAckMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);