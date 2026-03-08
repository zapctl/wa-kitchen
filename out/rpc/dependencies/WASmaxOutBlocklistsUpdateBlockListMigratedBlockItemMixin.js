const map = { id: "WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutBlocklistsBlocklistIdentifierMixin": require("./WASmaxOutBlocklistsBlocklistIdentifierMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.itemJid,n=o("WASmaxOutBlocklistsBlocklistIdentifierMixin").mergeBlocklistIdentifierMixin(o("WASmaxJsx").smax("item",{jid:o("WAWap").JID(t)}),e);return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeUpdateBlockListMigratedBlockItemMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);