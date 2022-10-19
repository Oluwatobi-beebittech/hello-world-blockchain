const getAPIKey = () => process.env.API_KEY;
const getContractAddress = () => process.env.CONTRACT_ADDRESS;
const getPrivateKey = () => process.env.PRIVATE_KEY;

exports.getAPIKey = getAPIKey;
exports.getContractAddress = getContractAddress;
exports.getPrivateKey = getPrivateKey;
