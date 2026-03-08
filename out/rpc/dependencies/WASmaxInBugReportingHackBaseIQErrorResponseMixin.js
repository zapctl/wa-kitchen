const map = { id: "WASmaxInBugReportingHackBaseIQErrorResponseMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInBugReportingIQErrorResponseMixin": require("./WASmaxInBugReportingIQErrorResponseMixin.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid,e,"to");if(!r.success)return r;var a=o("WASmaxInBugReportingIQErrorResponseMixin").parseIQErrorResponseMixin(e,t);return a.success?o("WAResultOrError").makeResult(babelHelpers.extends({to:r.value},a.value)):a}l.parseHackBaseIQErrorResponseMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);