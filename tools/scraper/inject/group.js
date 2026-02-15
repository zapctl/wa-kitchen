const participantTypes = require("WAWebDBParticipantTypes");

const specs = {
    enums: {
        ParticipantOperation: participantTypes.PARTICIPANT_OPERATION,
    },
}

console.log("GroupSpecs", specs);

return specs;