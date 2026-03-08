const map = { id: "WASmaxInGroupsBadLinkedGroupProfilePictureErrorMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"picture");if(!t.success)return t;var n=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"status","405");return n.success?o("WAResultOrError").makeResult({status:n.value}):n}l.parseBadLinkedGroupProfilePictureErrorMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);