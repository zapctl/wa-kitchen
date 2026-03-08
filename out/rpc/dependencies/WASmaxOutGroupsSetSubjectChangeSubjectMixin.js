const map = { id: "WASmaxOutGroupsSetSubjectChangeSubjectMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.subjectElementValue,n=o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("subject",null,t));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeSetSubjectChangeSubjectMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);