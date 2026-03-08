const map = { id: "WASmaxOutPushConfigSetSetConfigOrSetClearMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutPushConfigSetClearMixin": require("./WASmaxOutPushConfigSetClearMixin.js"),"WASmaxOutPushConfigSetSetConfigMixin": require("./WASmaxOutPushConfigSetSetConfigMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.setSetConfig)return o("WASmaxOutPushConfigSetSetConfigMixin").mergeSetSetConfigMixin(e,t.setSetConfig);if(t.setClear)return o("WASmaxOutPushConfigSetClearMixin").mergeSetClearMixin(e,t.setClear);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeSetSetConfigOrSetClearMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);