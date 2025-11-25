const dict = require("WAWapDict")

const TAGS = {
    LIST_EMPTY: 0,
    LIST_8: 248,
    LIST_16: 249,
    BINARY_8: 252,
    BINARY_20: 253,
    BINARY_32: 254,
    JID_PAIR: 250,
    JID_AD: 247,
    JID_FB: 246,
    JID_INTEROP: 245,
    NIBBLE_8: 255,
    HEX_8: 251,
    DICTIONARY_0: 236,
    DICTIONARY_1: 237,
    DICTIONARY_2: 238,
    DICTIONARY_3: 239,
}

const NIBBLE_TOKEN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", ".", "\ufffd", "\ufffd", "\ufffd", "\ufffd"];
const HEX_TOKEN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const specs = {
    constants: {
        DICT_VERSION: dict.DICT_VERSION,
        SINGLE_BYTE_TOKEN: dict.SINGLE_BYTE_TOKEN,
        DICTIONARY_0_TOKEN: dict.DICTIONARY_0_TOKEN,
        DICTIONARY_1_TOKEN: dict.DICTIONARY_1_TOKEN,
        DICTIONARY_2_TOKEN: dict.DICTIONARY_2_TOKEN,
        DICTIONARY_3_TOKEN: dict.DICTIONARY_3_TOKEN,
        NIBBLE_TOKEN,
        HEX_TOKEN,
    },
    enums: {
        TAGS,
    },
}

console.log("BinarySpecs", specs);

return specs
