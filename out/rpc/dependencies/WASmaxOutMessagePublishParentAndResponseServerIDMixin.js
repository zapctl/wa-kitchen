const map = { id: "WASmaxOutMessagePublishParentAndResponseServerIDMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.metaParentServerId,n=e.metaResponseServerId,r=o("WASmaxJsx").smax("message",null,o("WASmaxJsx").smax("meta",{parent_server_id:o("WAWap").INT(t),response_server_id:o("WAWap").CUSTOM_STRING(n)}));return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeParentAndResponseServerIDMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);