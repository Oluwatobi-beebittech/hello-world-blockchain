const { ethers } = require("hardhat");
const { getAPIKey, getContractAddress, getPrivateKey } = require("../Environment");

const API_KEY = getAPIKey();
const PRIVATE_KEY = getPrivateKey();
const CONTRACT_ADDRESS = getContractAddress();

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
console.log(JSON.stringify(contract.abi));

const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log(`The message is ${message}`);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("Another new message.");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

main();