const map = { id: "WASmaxOutSpamRawV2Mixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxJsx").smax("raw",{v:o("WAWap").INT(2)});return e}function s(t){var n=e();return o("WASmaxMixins").mergeStanzas(t,n)}l.mergeRawV2Mixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);