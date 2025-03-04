// This file contains the main logic for the decentralized exchange. It exports functions for swapping tokens, checking balances, and interacting with the smart contract.

const { ethers } = require("hardhat");

class DecentralizedExchange {
    constructor(tokenA, tokenB) {
        this.tokenA = tokenA;
        this.tokenB = tokenB;
        this.balances = {
            [tokenA]: 0,
            [tokenB]: 0
        };
    }

    async swap(tokenIn, tokenOut, amountIn) {
        if (!this.balances[tokenIn] || !this.balances[tokenOut]) {
            throw new Error("Invalid tokens");
        }

        // Logic for swapping tokens
        const amountOut = this.calculateSwapAmount(tokenIn, tokenOut, amountIn);
        this.balances[tokenIn] -= amountIn;
        this.balances[tokenOut] += amountOut;

        // Interact with the smart contract to execute the swap
        const exchangeContract = await this.getExchangeContract();
        await exchangeContract.swap(tokenIn, tokenOut, amountIn, amountOut);
        
        return amountOut;
    }

    calculateSwapAmount(tokenIn, tokenOut, amountIn) {
        // Placeholder for swap logic, e.g., using a constant product formula
        return amountIn; // Simplified for demonstration
    }

    async getExchangeContract() {
        const Exchange = await ethers.getContractFactory("Exchange");
        return await Exchange.deploy();
    }

    checkBalance(token) {
        return this.balances[token] || 0;
    }

    addLiquidity(token, amount) {
        if (!this.balances[token]) {
            throw new Error("Invalid token");
        }
        this.balances[token] += amount;
    }

    removeLiquidity(token, amount) {
        if (!this.balances[token] || this.balances[token] < amount) {
            throw new Error("Insufficient balance");
        }
        this.balances[token] -= amount;
    }
}

module.exports = DecentralizedExchange;