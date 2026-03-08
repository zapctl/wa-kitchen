const map = { id: "WASmaxInGroupsGroupInfoOrTruncatedGroupInfoGroupInfoMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGroupInfoMixin": require("./WASmaxInGroupsGroupInfoMixin.js"),"WASmaxInGroupsTruncatedGroupInfoMixin": require("./WASmaxInGroupsTruncatedGroupInfoMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"GroupInfo",value:t.value});var n=o("WASmaxInGroupsTruncatedGroupInfoMixin").parseTruncatedGroupInfoMixin(e);return n.success?o("WAResultOrError").makeResult({name:"TruncatedGroupInfo",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["GroupInfo","TruncatedGroupInfo"],[t,n])}l.parseGroupInfoOrTruncatedGroupInfoGroupInfoMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);