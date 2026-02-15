function makeEnumerable(obj) {
    return Object.getOwnPropertyNames(obj).reduce((data, prop) => {
        data[prop] = obj[prop];
        return data;
    }, {});
}

Object.defineProperty(window, "__onBeforeModuleFactory", {
    value: (mod) => Object.defineProperty(mod, "factory", {
        value: mod.factory,
        writable: false,
        configurable: false,
        enumerable: true,
    }),
    writable: false,
    configurable: false,
    enumerable: true,
});