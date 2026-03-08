const map = { id: "WASmaxOutBizSettingsSetPrivacySettingRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutBizSettingsBaseIQSetRequestMixin": require("./WASmaxOutBizSettingsBaseIQSetRequestMixin.js"),"WASmaxOutBizSettingsSmbDataSharingSettingMixin": require("./WASmaxOutBizSettingsSmbDataSharingSettingMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.smbDataSharingSettingMixinArgs,n=o("WASmaxOutBizSettingsBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"w:biz",to:o("WAWap").S_WHATSAPP_NET,smax_id:o("WAWap").INT(110)},o("WASmaxMixins").optionalMerge(o("WASmaxOutBizSettingsSmbDataSharingSettingMixin").mergeSmbDataSharingSettingMixin,o("WASmaxJsx").smax("privacy",null),t)));return n}l.makeSetPrivacySettingRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);