const specs = Object.values(require('__debug').modulesMap)
    .filter(mod => mod?.id.startsWith("WASmax"))
    .filter(mod => !mod?.id.endsWith("RPC"))
    .reduce((obj, mod) => {
        if (!mod.factory) return obj;

        obj[mod.id] = "// Dependencies: " + mod.dependencies.map(dep => dep.id).join(", ") + "\n" + mod.factory.toString();

        return obj;
    }, {});

return specs;