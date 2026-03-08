const map = { id: "WASmaxInBizLinkingHasProfilePictureMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"bytes");if(!t.success)return t;var n=o("WASmaxParseUtils").contentBytesRange(e,0,void 0);return n.success?o("WAResultOrError").makeResult({elementValue:n.value}):n}function s(t){var n=o("WASmaxParseUtils").flattenedChildWithTag(t,"profile_picture");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(n.value,"url");if(!r.success)return r;var a=o("WASmaxParseUtils").optionalChildWithTag(n.value,"bytes",e);if(!a.success)return a;var i=o("WASmaxParseUtils").contentString(r.value);return i.success?o("WAResultOrError").makeResult({profilePictureUrlElementValue:i.value,profilePictureBytes:a.value}):i}l.parseHasProfilePictureProfilePictureBytes=e,l.parseHasProfilePictureMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);