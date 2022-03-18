import { ethers } from "ethers";

export default class Blockchain {

  async deployBtc(abi: any, bytecode: string) {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(abi, bytecode, signer);
    let deployment = await factory.deploy();
    let result = await deployment.deployed();
    return result;
  }

  async deployBasicToken(abi: any, bytecode: string, initialBalance: string) {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(abi, bytecode, signer);
    let balance = ethers.utils.parseEther(initialBalance);
    let deployment =  await factory.deploy(balance);
    let result = await deployment.deployed();
    return result;
  }

  async save() {

  }

  static getNetwork() {
    switch (window.ethereum.networkVersion) {
      case '1':
        return 'main - do not use';
      case '2':
        return 'kovan';
      case '3':
        return 'ropsten';
      case '4':
        return 'rinkeby';
      case '5':
        return 'goerli';
      default:
        return 'unknown';
    }

  }


}
