const map = { id: "WASmaxOutMessagePublishNewsletterPollVoteMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutMessagePublishContentTypePollVoteMixin": require("./WASmaxOutMessagePublishContentTypePollVoteMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.voteElementValue,n=o("WASmaxJsx").smax("vote",null,t);return n}function s(t){var n=t.voteArgs,r=o("WASmaxOutMessagePublishContentTypePollVoteMixin").mergeContentTypePollVoteMixin(o("WASmaxJsx").smax("message",null,o("WASmaxJsx").smax("votes",null,o("WASmaxChildren").REPEATED_CHILD(e,n,0,1e3))),t);return r}function u(e,t){var n=s(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeNewsletterPollVoteVotesVote=e,l.mergeNewsletterPollVoteMixin=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);