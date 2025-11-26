const backendJobs = require("WAWebBackendJobs.flow");
const enumEditType = require("WAWebWamEnumEditType");
const msgCommon = require("WAWebHandleMsgCommon");

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
        ENC_MEDIA_TYPE: makeCamelToSnakeCase(makeEnumerable(backendJobs.EncMediaType)),
        EDIT_TYPE: enumEditType.EDIT_TYPE,
        STANZA_MSG_TYPES: makeCamelToSnakeCase(msgCommon.STANZA_MSG_TYPES),
    },
}

console.log("MessageSpecs", specs);

return specs;