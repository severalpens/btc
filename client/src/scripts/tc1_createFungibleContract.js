import { ethers } from "ethers";

//Contract details
const artifact = require("../artifacts/contracts/BasicToken.sol/BasicToken.json");
//const initialBalance = ethers.utils.parseEther("10000.0");
const contractConstructorArgs = [100000];


export const tc1_createFungibleContract = async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
  const deployment = await factory.deploy(...contractConstructorArgs);
  const contract = await deployment.deployed();
  localStorage.setItem('ft', contract.address);
  return contract.deployTransaction;
}
