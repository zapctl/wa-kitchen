const logoutReason = require("WAWebLogoutReasonConstants").LogoutReason;

function makeCamelToSnakeCase(obj) {
    return Object.entries(obj).reduce((data, [prop, value]) => {
        const name = prop.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toUpperCase();

        data[name] = value;
        return data;
    }, {});
}

function makeEnumerable(obj) {
    return Object.getOwnPropertyNames(obj).reduce((data, prop) => {
        data[prop] = obj[prop];
        return data;
    }, {});
}

const specs = {
    enums: {
        LogoutReason: makeCamelToSnakeCase(makeEnumerable(logoutReason.LogoutReason)),
    },
}

console.log("MainSpecs", specs);

return specs;