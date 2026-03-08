const map = { id: "WASmaxInPrivacyPrivacyContactListIdentifierMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInPrivacyContactListIds": require("./WASmaxInPrivacyContactListIds.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInPrivacyContactListIds").parseContactListIds(e);return t.success?o("WAResultOrError").makeResult({contactListIds:t.value}):t}l.parsePrivacyContactListIdentifierMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);