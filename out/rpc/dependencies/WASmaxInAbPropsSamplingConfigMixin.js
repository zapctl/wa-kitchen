const map = { id: "WASmaxInAbPropsSamplingConfigMixin" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxParseUtils").assertTag(e,"prop");if(!t.success)return t;var n=o("WASmaxParseUtils").attrIntRange(e,"event_code",1,void 0);if(!n.success)return n;var r=o("WASmaxParseUtils").attrIntRange(e,"sampling_weight",-1e4,1e4);return r.success?o("WAResultOrError").makeResult({eventCode:n.value,samplingWeight:r.value}):r}l.parseSamplingConfigMixin=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);