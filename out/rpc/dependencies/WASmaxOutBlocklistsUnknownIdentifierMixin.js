const map = { id: "WASmaxOutBlocklistsUnknownIdentifierMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("smax$any",{unknown_identifier:"true"});return e}function s(t){var n=e();return o("WASmaxMixins").mergeStanzas(t,n)}l.mergeUnknownIdentifierMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);