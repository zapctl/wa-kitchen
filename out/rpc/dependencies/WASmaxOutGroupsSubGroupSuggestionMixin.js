const map = { id: "WASmaxOutGroupsSubGroupSuggestionMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutGroupsGroupCreatorPhoneNumberMixin": require("./WASmaxOutGroupsGroupCreatorPhoneNumberMixin.js"),"WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin": require("./WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.subGroupSuggestionCreator,n=e.groupCreatorPhoneNumberMixinArgs,r=o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsGroupCreatorPhoneNumberMixin").mergeGroupCreatorPhoneNumberMixin,o("WASmaxOutGroupsSubGroupSuggestionWithoutCreatorMixin").mergeSubGroupSuggestionWithoutCreatorMixin(o("WASmaxJsx").smax("sub_group_suggestion",{creator:o("WAWap").USER_JID(t)}),e),n);return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeSubGroupSuggestionMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);