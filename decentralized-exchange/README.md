# Decentralized Token Exchange

This project implements a decentralized exchange for swapping two tokens, inspired by Thorchain. It allows users to add liquidity, remove liquidity, and execute trades in a secure and efficient manner.

## Project Structure

```
decentralized-exchange
├── src
│   ├── token.js          # Main logic for the decentralized exchange
│   ├── contracts
│   │   └── exchange.sol  # Solidity smart contract for token swaps
│   ├── scripts
│   │   └── deploy.js     # Script to deploy the smart contract
│   └── tests
│       └── exchange.test.js # Test cases for the smart contract
├── package.json          # npm configuration file
├── hardhat.config.js     # Hardhat configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd decentralized-exchange
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Compile the smart contract:**
   ```bash
   npx hardhat compile
   ```

4. **Deploy the smart contract:**
   ```bash
   npx hardhat run src/scripts/deploy.js --network <network-name>
   ```

## Usage

- **Swapping Tokens:** Use the functions in `src/token.js` to swap tokens.
- **Adding Liquidity:** Interact with the smart contract to add liquidity.
- **Removing Liquidity:** Use the provided functions to remove liquidity from the exchange.

## Examples

```javascript
// Example of swapping tokens
const { swapTokens } = require('./src/token');

async function exampleSwap() {
    const result = await swapTokens(tokenA, tokenB, amount);
    console.log(result);
}

exampleSwap();
```

## License

This project is licensed under the MIT License.