/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".env").toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 5,
    },
    //  unused configuration commented out for now
    //  mumbai: {
    //    url: "https://rpc-mumbai.maticvigil.com",
    //    accounts: [privateKey]
    //  }
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/T_Es7fMSULYiixR6bMIHaBL7i3eBbrQt",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
