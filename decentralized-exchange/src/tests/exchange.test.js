import { expect } from "chai";
import { ethers } from "hardhat";

describe("Decentralized Exchange", function () {
    let exchange;
    let tokenA;
    let tokenB;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");
        tokenA = await Token.deploy("TokenA", "TKA");
        tokenB = await Token.deploy("TokenB", "TKB");

        const Exchange = await ethers.getContractFactory("Exchange");
        exchange = await Exchange.deploy(tokenA.address, tokenB.address);
    });

    describe("Token Swaps", function () {
        it("Should swap TokenA for TokenB", async function () {
            await tokenA.mint(addr1.address, ethers.utils.parseEther("100"));
            await tokenA.connect(addr1).approve(exchange.address, ethers.utils.parseEther("100"));

            await exchange.connect(addr1).swap(tokenA.address, tokenB.address, ethers.utils.parseEther("50"));

            const balanceA = await tokenA.balanceOf(addr1.address);
            const balanceB = await tokenB.balanceOf(addr1.address);

            expect(balanceA).to.equal(ethers.utils.parseEther("50"));
            expect(balanceB).to.be.gt(0);
        });

        it("Debería realizar el intercambio de tokens correctamente", async function () {
            const [owner] = await ethers.getSigners();

            // Despliega el contrato de intercambio
            const Exchange = await ethers.getContractFactory("Exchange");
            const exchange = await Exchange.deploy("0xTokenA", "0xTokenB");
            await exchange.deployed();

            // Realiza el intercambio de tokens
            const amountIn = ethers.utils.parseEther("10");
            const amountOut = await exchange.swap("0xTokenA", "0xTokenB", amountIn);

            // Verifica que el intercambio se realizó correctamente
            expect(amountOut).to.equal(amountIn.div(2));
        });
    });

    describe("Liquidity Management", function () {
        it("Should add liquidity", async function () {
            await tokenA.mint(owner.address, ethers.utils.parseEther("100"));
            await tokenB.mint(owner.address, ethers.utils.parseEther("100"));

            await tokenA.approve(exchange.address, ethers.utils.parseEther("100"));
            await tokenB.approve(exchange.address, ethers.utils.parseEther("100"));

            await exchange.addLiquidity(ethers.utils.parseEther("100"), ethers.utils.parseEther("100"));

            const liquidity = await exchange.getLiquidity();
            expect(liquidity.tokenA).to.equal(ethers.utils.parseEther("100"));
            expect(liquidity.tokenB).to.equal(ethers.utils.parseEther("100"));
        });
    });
});