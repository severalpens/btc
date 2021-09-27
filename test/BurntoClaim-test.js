const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Burn To Claim", function () {
  it("test1", async function () {
    const BurnToClaim = await ethers.getContractFactory("BurnToClaim");
    const burnToClaim = await BurnToClaim.deploy();
    await burnToClaim.deployed();
  });
});
