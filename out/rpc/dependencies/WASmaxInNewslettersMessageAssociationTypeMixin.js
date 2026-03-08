const map = { id: "WASmaxInNewslettersMessageAssociationTypeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInNewslettersEnums": require("./WASmaxInNewslettersEnums.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"message");if(!t.success)return t;var n=o("WASmaxParseUtils").flattenedChildWithTag(e,"meta");if(!n.success)return n;var r=o("WASmaxParseUtils").attrStringEnum(n.value,"message_association_type",o("WASmaxInNewslettersEnums").ENUM_HDIMAGEDUALUPLOAD_HDVIDEODUALUPLOAD_HEVCVIDEODUALUPLOAD_MEDIAPOLL_MOTIONPHOTO_STICKERANNOTATION);return r.success?o("WAResultOrError").makeResult({metaMessageAssociationType:r.value}):r}l.parseMessageAssociationTypeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);