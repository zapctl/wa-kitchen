const map = { id: "WASmaxOutChatstateStateTypes" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutChatstateComposingMixin": require("./WASmaxOutChatstateComposingMixin.js"),"WASmaxOutChatstatePausedMixin": require("./WASmaxOutChatstatePausedMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.composing)return o("WASmaxOutChatstateComposingMixin").mergeComposingMixin(e,t.composing);if(t.isPaused)return o("WASmaxOutChatstatePausedMixin").mergePausedMixin(e);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeStateTypes=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);