const map = { id: "WASmaxOutBlocklistsUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WASmaxMixinGroupExhaustiveError": require("./WASmaxMixinGroupExhaustiveError.js"),"WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin": require("./WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin.js"),"WASmaxOutBlocklistsUpdateBlockListNonMigratedBlockItemMixin": require("./WASmaxOutBlocklistsUpdateBlockListNonMigratedBlockItemMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){if(t.updateBlockListMigratedBlockItem)return o("WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin").mergeUpdateBlockListMigratedBlockItemMixin(e,t.updateBlockListMigratedBlockItem);if(t.updateBlockListNonMigratedBlockItem)return o("WASmaxOutBlocklistsUpdateBlockListNonMigratedBlockItemMixin").mergeUpdateBlockListNonMigratedBlockItemMixin(e,t.updateBlockListNonMigratedBlockItem);throw new(o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError}l.mergeUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);