const map = { id: "WASmaxOutPrivacyGetContactBlacklistGetContactBlacklistLIDMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutPrivacyCategoryNamesForContactBlacklistMixin": require("./WASmaxOutPrivacyCategoryNamesForContactBlacklistMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.categoryNamesForContactBlacklistMixinArgs,n=o("WASmaxJsx").smax("privacy",{addressing_mode:"lid"},o("WASmaxOutPrivacyCategoryNamesForContactBlacklistMixin").mergeCategoryNamesForContactBlacklistMixin(o("WASmaxJsx").smax("list",{value:"contact_blacklist"}),t));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeGetContactBlacklistGetContactBlacklistLIDMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);