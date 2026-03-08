const map = { id: "WASmaxOutSpamFRXMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.tagValue,n=o("WASmaxJsx").smax("tag",{value:o("WAWap").CUSTOM_STRING(t)});return n}function s(e){var t=e.parametersElementValue,n=o("WASmaxJsx").smax("parameters",null,t);return n}function u(t){var n,r=t.tagArgs,a=t.parametersArgs,i=t.spamListReportee,l=t.contextElementValue,u=(n=o("WASmaxJsx")).smax("iq",null,n.smax("spam_list",{reportee:o("WAWap").USER_JID(i)}),n.smax("frx",null,n.smax("tagset",null,o("WASmaxChildren").REPEATED_CHILD(e,r,0,20)),n.smax("context",null,l),o("WASmaxChildren").OPTIONAL_CHILD(s,a)));return u}function c(e,t){var n=u(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeFRXFrxTagsetTag=e,l.makeFRXFrxParameters=s,l.mergeFRXMixin=c})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);