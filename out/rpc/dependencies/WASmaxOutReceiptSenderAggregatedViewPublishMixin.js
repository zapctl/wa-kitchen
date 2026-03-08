const map = { id: "WASmaxOutReceiptSenderAggregatedViewPublishMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.itemServerId,n=o("WASmaxJsx").smax("item",{server_id:o("WAWap").INT(t)});return n}function s(t){var n=t.itemArgs,r=t.receiptId,a=o("WASmaxJsx").smax("receipt",{id:o("WAWap").STANZA_ID(r)},o("WASmaxJsx").smax("list",null,o("WASmaxChildren").REPEATED_CHILD(e,n,0,255)));return a}function u(e,t){var n=s(t);return o("WASmaxMixins").mergeStanzas(e,n)}l.makeSenderAggregatedViewPublishListItem=e,l.mergeSenderAggregatedViewPublishMixin=u})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);