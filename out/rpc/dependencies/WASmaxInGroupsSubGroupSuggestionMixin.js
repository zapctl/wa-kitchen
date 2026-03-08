const map = { id: "WASmaxInGroupsSubGroupSuggestionMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGroupCreatorPhoneNumberMixin": require("./WASmaxInGroupsGroupCreatorPhoneNumberMixin.js"),"WASmaxInGroupsSubGroupSuggestionWithoutCreatorMixin": require("./WASmaxInGroupsSubGroupSuggestionWithoutCreatorMixin.js"),"WASmaxParseJid": require("./WASmaxParseJid.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"sub_group_suggestion");if(!t.success)return t;var n=o("WASmaxParseJid").attrUserJid(e,"creator");if(!n.success)return n;var r=o("WASmaxInGroupsSubGroupSuggestionWithoutCreatorMixin").parseSubGroupSuggestionWithoutCreatorMixin(e);if(!r.success)return r;var a=o("WASmaxInGroupsGroupCreatorPhoneNumberMixin").parseGroupCreatorPhoneNumberMixin(e);return o("WAResultOrError").makeResult(babelHelpers.extends({creator:n.value},r.value,{groupCreatorPhoneNumberMixin:a.success?a.value:null}))}l.parseSubGroupSuggestionMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);