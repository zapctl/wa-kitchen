const map = { id: "WASmaxInNewslettersPaidPartnershipContentMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"meta");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(n.value,"paid_partnership");return r.success?o("WASmaxParseUtils").voidSuccess:r}l.parsePaidPartnershipContentMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);