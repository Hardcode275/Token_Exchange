require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/f158361d906a45c49c91c8b6cd197c2f",
      accounts: ["TU_LLAVE_PRIVADA"]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/f158361d906a45c49c91c8b6cd197c2f",
      accounts: ["TU_LLAVE_PRIVADA"]
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