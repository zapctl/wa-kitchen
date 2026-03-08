const map = { id: "WASmaxOutPingsClientRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutPingsClientWellFormedToMixin": require("./WASmaxOutPingsClientWellFormedToMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(){var e=o("WASmaxOutPingsClientWellFormedToMixin").mergeClientWellFormedToMixin(o("WASmaxJsx").smax("iq",{id:o("WAWap").generateId(),type:"get",xmlns:"w:p"}));return e}l.makeClientRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);