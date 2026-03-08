const map = { id: "WASmaxOutBizSettingsGetPrivacySettingRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutBizSettingsBaseIQGetRequestMixin": require("./WASmaxOutBizSettingsBaseIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxOutBizSettingsBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",{xmlns:"w:biz",to:o("WAWap").S_WHATSAPP_NET,smax_id:o("WAWap").INT(109)},o("WASmaxJsx").smax("privacy",null)));return e}l.makeGetPrivacySettingRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);