import { ethers } from "ethers";

export default class Blockchain {

  async deploy(abi: any, bytecode: string, initialBalance = '1000') {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(abi, bytecode, signer);
    let balance = ethers.utils.parseEther(initialBalance);
    let hasConstructor = abi.find((x: any) => x.type && x.type === "constructor");
    let deployment = hasConstructor ? await factory.deploy(balance) : await factory.deploy();
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
