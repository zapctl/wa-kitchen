const map = { id: "WASmaxOutMessagePublishContentTypeQuizCreationMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.metaContenttype,n=o("WASmaxJsx").smax("message",{type:"poll"},o("WASmaxJsx").smax("meta",{polltype:"quiz_creation",contenttype:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,t)}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeContentTypeQuizCreationMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);