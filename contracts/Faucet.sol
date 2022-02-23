// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Faucet {

    address owner;

    mapping(address => uint256) nextRequestAt;

    address WETH;
    address USDC;
    address JPYC;
    address DAI;

    uint256 faucetDripAmount = 1;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "You are not the CEO.");
        _;
    }

    function setWETHAddress(address _address) external onlyOwner {
        WETH = _address;
    }

    function setUSDCAddress(address _address) external onlyOwner {
        USDC = _address;
    }

    function setJPYCAddress(address _address) external onlyOwner {
        JPYC = _address;
    }

    function setDAIAddress(address _address) external onlyOwner {
        DAI = _address;
    }

    function multipleSend() external {
        require(nextRequestAt[msg.sender] < block.timestamp, "FaucetError: Try again later");
        require(IERC20(WETH).balanceOf(address(this)) > 1, "FaucetError: Empty");
        require(IERC20(USDC).balanceOf(address(this)) > 1, "FaucetError: Empty");
        require(IERC20(JPYC).balanceOf(address(this)) > 1, "FaucetError: Empty");
        require(IERC20(DAI).balanceOf(address(this)) > 1, "FaucetError: Empty");
        nextRequestAt[msg.sender] = block.timestamp * (1 weeks);
        IERC20(WETH).transfer(msg.sender, faucetDripAmount * 10 ** 18);
        IERC20(USDC).transfer(msg.sender, faucetDripAmount * 10 ** 18);
        IERC20(JPYC).transfer(msg.sender, faucetDripAmount * 10 ** 18);
        IERC20(DAI).transfer(msg.sender, faucetDripAmount * 10 ** 18);
    }

    function setFaucetDripAmount(uint256 _amount) external onlyOwner {
        faucetDripAmount = _amount;
    }
}

interface IERC20 {
    function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns (uint);

    function transfer(address recipient, uint amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);
}