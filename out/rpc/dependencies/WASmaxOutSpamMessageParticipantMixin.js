const map = { id: "WASmaxOutSpamMessageParticipantMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t,n=e.messageParticipant,r=e.messageParticipantType,a=e.messageMemberTag,i=e.messageMemberTagTsS,l=o("WASmaxJsx").smax("message",{participant:(t=o("WAWap")).USER_JID(n),participant_type:o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING,r),member_tag:o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING,a),member_tag_ts_s:o("WASmaxAttrs").OPTIONAL(t.INT,i)});return l}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeMessageParticipantMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);