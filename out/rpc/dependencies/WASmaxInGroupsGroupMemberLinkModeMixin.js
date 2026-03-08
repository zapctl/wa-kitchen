const map = { id: "WASmaxInGroupsGroupMemberLinkModeMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsMemberLinkModes": require("./WASmaxInGroupsMemberLinkModes.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").flattenedChildWithTag(e,"member_link_mode");if(!t.success)return t;var n=o("WASmaxInGroupsMemberLinkModes").parseMemberLinkModes(t.value);return n.success?o("WAResultOrError").makeResult({memberLinkModeMemberLinkModes:n.value}):n}l.parseGroupMemberLinkModeMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);