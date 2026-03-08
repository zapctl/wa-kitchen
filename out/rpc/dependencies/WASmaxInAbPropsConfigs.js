const map = { id: "WASmaxInAbPropsConfigs" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInAbPropsExperimentConfigMixin": require("./WASmaxInAbPropsExperimentConfigMixin.js"),"WASmaxInAbPropsSamplingConfigMixin": require("./WASmaxInAbPropsSamplingConfigMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInAbPropsExperimentConfigMixin").parseExperimentConfigMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"ExperimentConfig",value:t.value});var n=o("WASmaxInAbPropsSamplingConfigMixin").parseSamplingConfigMixin(e);return n.success?o("WAResultOrError").makeResult({name:"SamplingConfig",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["ExperimentConfig","SamplingConfig"],[t,n])}l.parseConfigs=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);