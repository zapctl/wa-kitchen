const map = { id: "WASmaxInWaffleIQErrorWFSuspendedMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInWaffleEnums": require("./WASmaxInWaffleEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"error");if(!t.success)return t;var n=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString,e,"text","wf-suspended");if(!n.success)return n;var r=o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt,e,"code",484);if(!r.success)return r;var a=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum,e,"ndc",o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);if(!a.success)return a;var i=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum,e,"npr",o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);return i.success?o("WAResultOrError").makeResult({text:n.value,code:r.value,ndc:a.value,npr:i.value}):i}l.parseIQErrorWFSuspendedMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);