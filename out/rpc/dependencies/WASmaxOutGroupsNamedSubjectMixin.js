const map = { id: "WASmaxOutGroupsNamedSubjectMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.anySubject,n=o("WASmaxJsx").smax("smax$any",{subject:o("WAWap").CUSTOM_STRING(t)});return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNamedSubjectMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);