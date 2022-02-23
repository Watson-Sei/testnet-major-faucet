import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import {
  abi as FAUCET_API,
  bytecode as FAUCET_BYTECODE,
} from "../artifacts/contracts/Faucet.sol/Faucet.json";
import {
  abi as WERC20_ABI,
  bytecode as WERC20_BYTECODE,
} from "../artifacts/contracts/WERC20.sol/WERC20.json";

async function main() {
  const [deployer] = await ethers.getSigners();
  const Faucet = await ethers.getContractFactory(FAUCET_API, FAUCET_BYTECODE);
  const faucet = await Faucet.connect(deployer).deploy();
  await faucet.deployed();
  console.log("Faucet deployed to:", faucet.address);

  const ERC20 = await ethers.getContractFactory(WERC20_ABI, WERC20_BYTECODE);

  const WETH = await ERC20.connect(deployer).deploy("Wrapped ETH", "WETH");
  await WETH.deployed();
  console.log("WETH deployed to:", WETH.address);

  const USDC = await ERC20.connect(deployer).deploy("USD Coin", "USDC");
  await USDC.deployed();
  console.log("USDC deployed to:", USDC.address);

  const JPYC = await ERC20.connect(deployer).deploy("JPY Coin", "JPYC");
  await JPYC.deployed();
  console.log("JPYC deployed to:", JPYC.address);

  const DAI = await ERC20.connect(deployer).deploy("DAI", "DAI");
  await DAI.deployed();
  console.log("DAI deployed to:", DAI.address);

  await faucet.setWETHAddress(WETH.address);
  await faucet.setUSDCAddress(USDC.address);
  await faucet.setJPYCAddress(JPYC.address);
  await faucet.setDAIAddress(DAI.address);

  await WETH.connect(deployer).transfer(
    faucet.address,
    BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
  );
  await USDC.connect(deployer).transfer(
    faucet.address,
    BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
  );
  await JPYC.connect(deployer).transfer(
    faucet.address,
    BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
  );
  await DAI.connect(deployer).transfer(
    faucet.address,
    BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
