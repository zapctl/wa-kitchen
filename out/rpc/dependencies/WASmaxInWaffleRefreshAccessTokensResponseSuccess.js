const map = { id: "WASmaxInWaffleRefreshAccessTokensResponseSuccess" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInWaffleIQResultResponseMixin": require("./WASmaxInWaffleIQResultResponseMixin.js"),"WASmaxInWaffleRSAEncryptionMetadataMixin": require("./WASmaxInWaffleRSAEncryptionMetadataMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxParseUtils").flattenedChildWithTag(e,"encryption_metadata");if(!r.success)return r;var a=o("WASmaxInWaffleRSAEncryptionMetadataMixin").parseRSAEncryptionMetadataMixin(r.value);if(!a.success)return a;var i=o("WASmaxInWaffleIQResultResponseMixin").parseIQResultResponseMixin(e,t);return i.success?o("WAResultOrError").makeResult(babelHelpers.extends({encryptionMetadataRSAEncryptionMetadataMixin:a.value},i.value)):i}l.parseRefreshAccessTokensResponseSuccess=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);