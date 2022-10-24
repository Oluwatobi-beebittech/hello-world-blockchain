/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETH_SCAN_KEY, POLY_SCAN_KEY, MUMBAI_API_URL } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      mumbai: {
         url: MUMBAI_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
   },
   etherscan: {
      apiKey: ETH_SCAN_KEY,
   },
};
