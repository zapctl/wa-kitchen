const map = { id: "WASmaxOutBlocklistsUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutBlocklistsUpdateBlockListBlockItemMixin": require("./WASmaxOutBlocklistsUpdateBlockListBlockItemMixin.js"),"WASmaxOutBlocklistsUpdateBlockListUnblockItemMixin": require("./WASmaxOutBlocklistsUpdateBlockListUnblockItemMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.updateBlockListBlockItem)return o("WASmaxOutBlocklistsUpdateBlockListBlockItemMixin").mergeUpdateBlockListBlockItemMixin(e,t.updateBlockListBlockItem);if(t.updateBlockListUnblockItem)return o("WASmaxOutBlocklistsUpdateBlockListUnblockItemMixin").mergeUpdateBlockListUnblockItemMixin(e,t.updateBlockListUnblockItem);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);