import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert } from "console";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import {
  abi as WERC20_ABI,
  bytecode as WERC20_BYTECODE,
} from "../artifacts/contracts/WERC20.sol/WERC20.json";
import {
  abi as FAUCET01_ABI,
  bytecode as FAUCET01_BYTECODE,
} from "../artifacts/contracts/Faucet.sol/Faucet.json";
import { expect } from "chai";

describe("Faucet", function () {
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  let WETH: Contract;
  let USDC: Contract;
  let JPYC: Contract;
  let DAI: Contract;

  let Faucet: Contract;

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();

    const WERC20 = await ethers.getContractFactory(WERC20_ABI, WERC20_BYTECODE);
    WETH = await WERC20.connect(owner).deploy("Wrapped ETH", "WETH");
    assert(await WETH.deployed(), "contract was not deployed");
    USDC = await WERC20.connect(owner).deploy("USD Coin", "USDC");
    assert(await USDC.deployed(), "contract was not deployed");
    JPYC = await WERC20.connect(owner).deploy("JPY Coin", "JPYC");
    assert(await JPYC.deployed(), "contract was not deployed");
    DAI = await WERC20.connect(owner).deploy("DAI", "DAI");
    assert(await DAI.deployed(), "contract was not deployed");

    const Faucet01 = await ethers.getContractFactory(
      FAUCET01_ABI,
      FAUCET01_BYTECODE
    );
    Faucet = await Faucet01.connect(owner).deploy();

    await Faucet.setWETHAddress(WETH.address);
    await Faucet.setUSDCAddress(USDC.address);
    await Faucet.setJPYCAddress(JPYC.address);
    await Faucet.setDAIAddress(DAI.address);

    await WETH.connect(owner).transfer(
      Faucet.address,
      BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
    );
    await USDC.connect(owner).transfer(
      Faucet.address,
      BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
    );
    await JPYC.connect(owner).transfer(
      Faucet.address,
      BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
    );
    await DAI.connect(owner).transfer(
      Faucet.address,
      BigNumber.from(10000).mul(BigNumber.from(10).pow(BigNumber.from(18)))
    );
  });
  it("Faucet Test", async () => {
    await Faucet.connect(addr1).multipleSend();
    assert(
      (await WETH.balanceOf(addr1.address)).toString() / 10 ** 18 === 1,
      "Failed to transfer funds"
    );
    assert(
      (await USDC.balanceOf(addr1.address)).toString() / 10 ** 18 === 1,
      "Failed to transfer funds"
    );
    assert(
      (await JPYC.balanceOf(addr1.address)).toString() / 10 ** 18 === 1,
      "Failed to transfer funds"
    );
    assert(
      (await DAI.balanceOf(addr1.address)).toString() / 10 ** 18 === 1,
      "Failed to transfer funds"
    );
    await expect(Faucet.connect(addr1).multipleSend()).to.be.reverted;
  });
});
