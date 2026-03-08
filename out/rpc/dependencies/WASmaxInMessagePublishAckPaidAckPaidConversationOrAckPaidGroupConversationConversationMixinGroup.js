const map = { id: "WASmaxInMessagePublishAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInMessagePublishAckPaidConversationMixin": require("./WASmaxInMessagePublishAckPaidConversationMixin.js"),"WASmaxInMessagePublishAckPaidGroupConversationMixin": require("./WASmaxInMessagePublishAckPaidGroupConversationMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInMessagePublishAckPaidConversationMixin").parseAckPaidConversationMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"AckPaidConversation",value:t.value});var n=o("WASmaxInMessagePublishAckPaidGroupConversationMixin").parseAckPaidGroupConversationMixin(e);return n.success?o("WAResultOrError").makeResult({name:"AckPaidGroupConversation",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["AckPaidConversation","AckPaidGroupConversation"],[t,n])}l.parseAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);