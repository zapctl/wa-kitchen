const map = { id: "WASmaxInGroupsIdentityMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsIdentityTypes": require("./WASmaxInGroupsIdentityTypes.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsIdentityTypes").parseIdentityTypes(e);return t.success?o("WAResultOrError").makeResult({identityTypes:t.value}):t}l.parseIdentityMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);