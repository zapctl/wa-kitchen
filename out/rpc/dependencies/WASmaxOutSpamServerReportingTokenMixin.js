const map = { id: "WASmaxOutSpamServerReportingTokenMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutSpamReportingTagElementMixin": require("./WASmaxOutSpamReportingTagElementMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxJsx").smax("smax$any",null,o("WASmaxOutSpamReportingTagElementMixin").mergeReportingTagElementMixin(o("WASmaxJsx").smax("reporting",null),e));return t}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeServerReportingTokenMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);