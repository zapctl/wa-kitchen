const map = { id: "WASmaxInPsaEnums" };
const exports = module.exports = {};
const dependencies = {"WAJids": require("./WAJids.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){var e={blocked:"blocked",unblocked:"unblocked"},s={image:"image",video:"video"},u={validators:[o("WAJids").validateStatusJid,o("WAJids").validateUserJid],typeName:"StatusJid|UserJid"};l.ENUM_BLOCKED_UNBLOCKED=e,l.ENUM_IMAGE_VIDEO=s,l.STATUSJID_USERJID=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);