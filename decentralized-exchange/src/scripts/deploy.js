const { ethers } = require("hardhat");

async function main() {
  // Obtiene el primer signer (cuenta) de la lista de signers
  const [deployer] = await ethers.getSigners();

  console.log("Desplegando contratos con la cuenta:", deployer.address);

  // Obtiene el balance de la cuenta deployer
  const balance = await deployer.getBalance();
  console.log("Balance de la cuenta:", balance.toString());

  // Despliega el contrato de intercambio
  const Exchange = await ethers.getContractFactory("Exchange");
  const exchange = await Exchange.deploy();
  await exchange.deployed();

  console.log("Contrato de intercambio desplegado en:", exchange.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });