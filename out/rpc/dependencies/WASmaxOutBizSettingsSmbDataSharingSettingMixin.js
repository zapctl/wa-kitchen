const map = { id: "WASmaxOutBizSettingsSmbDataSharingSettingMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutBizSettingsSmbDataSharingSettingValueMixin": require("./WASmaxOutBizSettingsSmbDataSharingSettingValueMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxJsx").smax("privacy",null,o("WASmaxOutBizSettingsSmbDataSharingSettingValueMixin").mergeSmbDataSharingSettingValueMixin(o("WASmaxJsx").smax("smb_data_sharing_with_meta_consent",null),e));return t}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeSmbDataSharingSettingMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);