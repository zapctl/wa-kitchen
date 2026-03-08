const map = { id: "WASmaxOutBlocklistsBlocklistIds" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutBlocklistsDisplayNameMixin": require("./WASmaxOutBlocklistsDisplayNameMixin.js"),"WASmaxOutBlocklistsPnJidMixin": require("./WASmaxOutBlocklistsPnJidMixin.js"),"WASmaxOutBlocklistsUnknownIdentifierMixin": require("./WASmaxOutBlocklistsUnknownIdentifierMixin.js"),"WASmaxOutBlocklistsUsernameMixin": require("./WASmaxOutBlocklistsUsernameMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.username)return o("WASmaxOutBlocklistsUsernameMixin").mergeUsernameMixin(e,t.username);if(t.pnJid)return o("WASmaxOutBlocklistsPnJidMixin").mergePnJidMixin(e,t.pnJid);if(t.displayName)return o("WASmaxOutBlocklistsDisplayNameMixin").mergeDisplayNameMixin(e,t.displayName);if(t.isUnknownIdentifier)return o("WASmaxOutBlocklistsUnknownIdentifierMixin").mergeUnknownIdentifierMixin(e);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeBlocklistIds=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);