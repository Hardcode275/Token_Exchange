// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DecentralizedExchange {
    struct Liquidity {
        uint256 tokenAAmount;
        uint256 tokenBAmount;
    }

    mapping(address => Liquidity) public liquidityProviders;
    IERC20 public tokenA;
    IERC20 public tokenB;

    event LiquidityAdded(address indexed provider, uint256 tokenAAmount, uint256 tokenBAmount);
    event LiquidityRemoved(address indexed provider, uint256 tokenAAmount, uint256 tokenBAmount);
    event TokensSwapped(address indexed user, uint256 amountIn, uint256 amountOut);

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

    function addLiquidity(uint256 _tokenAAmount, uint256 _tokenBAmount) external {
        require(_tokenAAmount > 0 && _tokenBAmount > 0, "Amounts must be greater than zero");

        tokenA.transferFrom(msg.sender, address(this), _tokenAAmount);
        tokenB.transferFrom(msg.sender, address(this), _tokenBAmount);

        liquidityProviders[msg.sender].tokenAAmount += _tokenAAmount;
        liquidityProviders[msg.sender].tokenBAmount += _tokenBAmount;

        emit LiquidityAdded(msg.sender, _tokenAAmount, _tokenBAmount);
    }

    function removeLiquidity(uint256 _tokenAAmount, uint256 _tokenBAmount) external {
        require(liquidityProviders[msg.sender].tokenAAmount >= _tokenAAmount, "Insufficient Token A balance");
        require(liquidityProviders[msg.sender].tokenBAmount >= _tokenBAmount, "Insufficient Token B balance");

        liquidityProviders[msg.sender].tokenAAmount -= _tokenAAmount;
        liquidityProviders[msg.sender].tokenBAmount -= _tokenBAmount;

        tokenA.transfer(msg.sender, _tokenAAmount);
        tokenB.transfer(msg.sender, _tokenBAmount);

        emit LiquidityRemoved(msg.sender, _tokenAAmount, _tokenBAmount);
    }

    function swapTokens(uint256 _amountIn, bool isAToB) external {
        require(_amountIn > 0, "Amount must be greater than zero");

        if (isAToB) {
            require(tokenA.balanceOf(msg.sender) >= _amountIn, "Insufficient Token A balance");
            uint256 amountOut = getAmountOut(_amountIn, true);
            tokenA.transferFrom(msg.sender, address(this), _amountIn);
            tokenB.transfer(msg.sender, amountOut);
            emit TokensSwapped(msg.sender, _amountIn, amountOut);
        } else {
            require(tokenB.balanceOf(msg.sender) >= _amountIn, "Insufficient Token B balance");
            uint256 amountOut = getAmountOut(_amountIn, false);
            tokenB.transferFrom(msg.sender, address(this), _amountIn);
            tokenA.transfer(msg.sender, amountOut);
            emit TokensSwapped(msg.sender, _amountIn, amountOut);
        }
    }

    function getAmountOut(uint256 _amountIn, bool isAToB) internal view returns (uint256) {
        // Simple pricing mechanism (could be improved)
        if (isAToB) {
            return _amountIn; // Placeholder for actual conversion logic
        } else {
            return _amountIn; // Placeholder for actual conversion logic
        }
    }

    // Función para realizar el intercambio de tokens
    function swap(address _tokenA, address _tokenB, uint256 _amountIn) public returns (uint256) {
        // Lógica para el intercambio de tokens
        // ...
        uint256 amountOut = _amountIn / 2; // Ejemplo de cantidad de salida
        return amountOut;
    }
}