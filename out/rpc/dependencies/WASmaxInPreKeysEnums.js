const map = { id: "WASmaxInPreKeysEnums" };
const exports = module.exports = {};
const dependencies = {"WAJids": require("./WAJids.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){var e,s={validators:[(e=o("WAJids")).validateDeviceJid,e.validateDeviceJid],typeName:"DeviceJid|DeviceJid"},u={validators:[e.validateDeviceJid,e.validateDeviceJid,e.validateInteropDeviceJid,e.validateInteropDeviceJid],typeName:"DeviceJid|DeviceJid|InteropDeviceJid|InteropDeviceJid"},c={validators:[e.validateDeviceJid,e.validateDomainJid],typeName:"DeviceJid|DomainJid"},d={validators:[e.validateUserJid,e.validateUserJid],typeName:"UserJid|UserJid"};l.DEVICEJID_DEVICEJID=s,l.DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID=u,l.DEVICEJID_DOMAINJID=c,l.USERJID_USERJID=d})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);