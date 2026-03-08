const map = { id: "WASmaxOutGroupsCreateSubGroupSuggestionSuggestionForExistingGroupsMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.hasHiddenGroup,n=e.groupJid,r=o("WASmaxJsx").smax("group",{jid:o("WAWap").GROUP_JID(n)},o("WASmaxChildren").HAS_OPTIONAL_CHILD(s,t));return r}function s(){var e=o("WASmaxJsx").smax("hidden_group",null);return e}function u(t){var n=t.groupArgs,r=o("WASmaxJsx").smax("sub_group_suggestion",null,o("WASmaxChildren").REPEATED_CHILD(e,n,1,1e3));return r}function c(e,t){var n=u(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeCreateSubGroupSuggestionSuggestionForExistingGroupsGroup=e,l.makeCreateSubGroupSuggestionSuggestionForExistingGroupsGroupHiddenGroup=s,l.mergeCreateSubGroupSuggestionSuggestionForExistingGroupsMixin=c})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);