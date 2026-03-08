const map = { id: "WASmaxOutReceiptPublishViewRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutReceiptNewsletterMixin": require("./WASmaxOutReceiptNewsletterMixin.js"),"WASmaxOutReceiptSenderAggregatedViewPublishMixin": require("./WASmaxOutReceiptSenderAggregatedViewPublishMixin.js"),"WASmaxOutReceiptViewTypeMixin": require("./WASmaxOutReceiptViewTypeMixin.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxOutReceiptSenderAggregatedViewPublishMixin").mergeSenderAggregatedViewPublishMixin(o("WASmaxOutReceiptViewTypeMixin").mergeViewTypeMixin(o("WASmaxOutReceiptNewsletterMixin").mergeNewsletterMixin(o("WASmaxJsx").smax("receipt",null),e)),e);return t}l.makePublishViewRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);