const map = { id: "WASmaxOutBlocklistsUpdateBlockListReportBlockEntryPointMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.entryPointSource,n=o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("entry_point",{source:o("WAWap").CUSTOM_STRING(t)}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeUpdateBlockListReportBlockEntryPointMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);