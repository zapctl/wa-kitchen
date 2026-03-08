const map = { id: "WASmaxOutSpamUIStateSetMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("uistate",{value:"spam_banner"});return e}function s(t){var n=t.hasUistate,r=o("WASmaxJsx").smax("spam_list",null,o("WASmaxJsx").smax("uistateset",null,o("WASmaxChildren").HAS_OPTIONAL_CHILD(e,n)));return r}function u(e,t){var n=s(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeUIStateSetUistatesetUistate=e,l.mergeUIStateSetMixin=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);