const map = { id: "WASmaxOutSpamMessageSenderOrRecipientMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutSpamMessageRecipientMixin": require("./WASmaxOutSpamMessageRecipientMixin.js"),"WASmaxOutSpamMessageSenderMixin": require("./WASmaxOutSpamMessageSenderMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.messageSender)return o("WASmaxOutSpamMessageSenderMixin").mergeMessageSenderMixin(e,t.messageSender);if(t.messageRecipient)return o("WASmaxOutSpamMessageRecipientMixin").mergeMessageRecipientMixin(e,t.messageRecipient);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeMessageSenderOrRecipientMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);