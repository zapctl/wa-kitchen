const map = { id: "WASmaxInReceiptPublishViewResponseSuccess" };
const exports = module.exports = {};
const dependencies = {"WASmaxInReceiptPublishSuccessMixin": require("./WASmaxInReceiptPublishSuccessMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"ack");if(!n.success)return n;var r=o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(e,t);return r.success,r}l.parsePublishViewResponseSuccess=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);