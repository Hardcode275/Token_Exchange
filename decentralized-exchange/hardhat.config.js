require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: ["YOUR_PRIVATE_KEY"]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  },
  paths: {
    artifacts: "./src/artifacts",
    sources: "./src/contracts",
    tests: "./src/tests",
    cache: "./src/cache",
    deployments: "./src/deployments"
  }
};