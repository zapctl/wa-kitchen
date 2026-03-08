const map = { id: "WASmaxOutSpamContentTypeTextOrMediaMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutSpamContentTypeMediaMixin": require("./WASmaxOutSpamContentTypeMediaMixin.js"),"WASmaxOutSpamContentTypeTextMixin": require("./WASmaxOutSpamContentTypeTextMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.isContentTypeText)return o("WASmaxOutSpamContentTypeTextMixin").mergeContentTypeTextMixin(e);if(t.isContentTypeMedia)return o("WASmaxOutSpamContentTypeMediaMixin").mergeContentTypeMediaMixin(e);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeContentTypeTextOrMediaMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);