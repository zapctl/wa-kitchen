const map = { id: "WASmaxInGroupsParticipantMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsParticipantMixins": require("./WASmaxInGroupsParticipantMixins.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"participant");if(!t.success)return t;var n=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString,e,"participant_label");if(!n.success)return n;var r=o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange,e,"participant_label_mtime",0,void 0);if(!r.success)return r;var a=o("WASmaxInGroupsParticipantMixins").parseParticipantMixins(e);return a.success?o("WAResultOrError").makeResult({participantLabel:n.value,participantLabelMtime:r.value,participantMixins:a.value}):a}l.parseParticipantMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);