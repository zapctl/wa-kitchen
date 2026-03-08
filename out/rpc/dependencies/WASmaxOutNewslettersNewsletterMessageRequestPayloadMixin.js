const map = { id: "WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutNewslettersMessageDirections": require("./WASmaxOutNewslettersMessageDirections.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.messagesCount,n=e.messageDirectionsArgs,r=o("WASmaxMixins").optionalMerge(o("WASmaxOutNewslettersMessageDirections").mergeMessageDirections,o("WASmaxJsx").smax("messages",{count:o("WAWap").INT(t)}),n);return r}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeNewsletterMessageRequestPayloadMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);