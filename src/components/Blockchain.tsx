import { ethers } from "ethers";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/mutations';

export default class Blockchain {

  async deployBtc(artifact: any) {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
    let deployment = await factory.deploy();
    let result = await deployment.deployed();
    await this.save(artifact, result);
    return result;
  }

  async deployBasicToken(artifact:any, initialBalance: string) {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
    let balance = ethers.utils.parseEther(initialBalance);
    let deployment = await factory.deploy(balance);
    let result = await deployment.deployed();
    await this.save(artifact, result);
    return result;
  }

async registerContract(args:any){
  let address = '0x0';
  let abi: ethers.ContractInterface = [];
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer = provider.getSigner();
  let ethersContract = new ethers.Contract(address, abi, signer);
  let tx = await ethersContract.registerContract(address);
  let result = await tx.wait();
  await this.save(args, result);
  return result;
}

async saveTx(artifact:any, result: any){
 // let tmp = await API.graphql({ query: mutations.createContract, variables: { input } });
}

  async save(artifact:any, result: any) {
    let dt = new Date();
    let input: any = {
      abi: JSON.stringify(artifact.abi),
      name: artifact.contractName,
      address: result.address,
      symbol: '',
      network: Blockchain.getNetwork(window.ethereum.chainId),
      owner: '',
      initialBalance: '',
      timestamp: dt.getTime()
    };

    let tmp = await API.graphql({ query: mutations.createContract, variables: { input } });


  }

  static getNetwork(id: string) {
    switch (id) {
      case '0x1':
        return 'main - do not use';
      case '0x2':
        return 'kovan';
      case '0x3':
        return 'ropsten';
      case '0x4':
        return 'rinkeby';
      case '0x5':
        return 'goerli';
      default:
        return 'unknown';
    }

  }


}
