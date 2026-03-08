const map = { id: "WASmaxInVoipEnums" };
const exports = module.exports = {};
const dependencies = {"WAJids": require("./WAJids.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){var e,s={audio:"audio",video:"video"},u={link_edit:"link_edit",preview:"preview"},c={validators:[(e=o("WAJids")).validateCallJid,e.validateDeviceJid,e.validateDomainJid,e.validateUserJid],typeName:"CallJid|DeviceJid|DomainJid|UserJid"},d={validators:[e.validateCallJid,e.validateDomainJid],typeName:"CallJid|DomainJid"},m={validators:[e.validateDeviceJid,e.validateUserJid],typeName:"DeviceJid|UserJid"};l.ENUM_AUDIO_VIDEO=s,l.ENUM_LINKEDIT_PREVIEW=u,l.CALLJID_DEVICEJID_DOMAINJID_USERJID=c,l.CALLJID_DOMAINJID=d,l.DEVICEJID_USERJID=m})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);