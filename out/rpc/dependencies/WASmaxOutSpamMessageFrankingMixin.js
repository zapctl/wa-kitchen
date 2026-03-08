const map = { id: "WASmaxOutSpamMessageFrankingMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutSpamClientFrankingTagMixin": require("./WASmaxOutSpamClientFrankingTagMixin.js"),"WASmaxOutSpamRawV3Mixin": require("./WASmaxOutSpamRawV3Mixin.js"),"WASmaxOutSpamServerFrankingTagMixin": require("./WASmaxOutSpamServerFrankingTagMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutSpamRawV3Mixin").mergeRawV3Mixin(o("WASmaxJsx").smax("raw",null),e);return t}function s(t){var n=t.rawArgs,r=t.clientFrankingTagMixinArgs,a=o("WASmaxOutSpamServerFrankingTagMixin").mergeServerFrankingTagMixin(o("WASmaxMixins").optionalMerge(o("WASmaxOutSpamClientFrankingTagMixin").mergeClientFrankingTagMixin,o("WASmaxJsx").smax("message",null,o("WASmaxChildren").OPTIONAL_CHILD(e,n)),r),t);return a}function u(e,t){var n=s(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeMessageFrankingRaw=e,l.mergeMessageFrankingMixin=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);