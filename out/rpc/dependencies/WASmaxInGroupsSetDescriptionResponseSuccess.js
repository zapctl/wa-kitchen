const map = { id: "WASmaxInGroupsSetDescriptionResponseSuccess" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsIQResultResponseMixin": require("./WASmaxInGroupsIQResultResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange,e,"t",0,void 0);if(!r.success)return r;var a=o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(e,t);return a.success?o("WAResultOrError").makeResult(babelHelpers.extends({t:r.value},a.value)):a}l.parseSetDescriptionResponseSuccess=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);