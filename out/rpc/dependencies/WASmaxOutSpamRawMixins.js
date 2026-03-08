const map = { id: "WASmaxOutSpamRawMixins" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutSpamRawV2Mixin": require("./WASmaxOutSpamRawV2Mixin.js"),"WASmaxOutSpamRawV3Mixin": require("./WASmaxOutSpamRawV3Mixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.isRawV2)return o("WASmaxOutSpamRawV2Mixin").mergeRawV2Mixin(e);if(t.rawV3)return o("WASmaxOutSpamRawV3Mixin").mergeRawV3Mixin(e,t.rawV3);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeRawMixins=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);