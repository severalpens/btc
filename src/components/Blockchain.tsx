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
    await this.saveContract(artifact, result);
    return result;
  }

  async deployBasicToken(artifact:any, initialBalance: string) {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
    let balance = ethers.utils.parseEther(initialBalance);
    let deployment = await factory.deploy(balance);
    let result = await deployment.deployed();
    await this.saveContract(artifact, result);
    return result;
  }
  
  async initialize(contract:any, tokenAddress: string, tokenTransferAmount: string){
    let address: string = contract.address;
    let abi: ethers.ContractInterface = contract.abi;
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let ethersContract = new ethers.Contract(address, abi, signer);
    
    let tx = await ethersContract.registerContract(tokenAddress);
    let result = await tx.wait();
    await this.saveLog('registerContract',result);
    
    let amount = ethers.utils.parseEther(tokenTransferAmount);
    let tx2 = await ethersContract.transfer(amount);
    let result2 = await tx2.wait();
    await this.saveLog('transfer',result2);

    return result;

  }

  async approve(artifact:any, address: string, amount: string){
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract = new ethers.Contract(artifact.address, artifact.abi, provider.getSigner());
    
    let tx = await contract.approve(address,amount);
    let result = await tx.wait();
    await this.saveLog('approve',result);
    return result;

  }

  
  async exitTransaction(artifact:any, burnAddress: string, hash: string, periodEndSeconds: number, tokenAddress: string, amount: string){
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract = new ethers.Contract(artifact.address, artifact.abi, provider.getSigner());
    
    let tx = await contract.exitTransaction(burnAddress, hash, periodEndSeconds, tokenAddress, amount);
    let result: ethers.utils.Result = await tx.wait();
    let args: any = result.events[result.events.length - 1].args;
    let transactionId: string = args.transactionId;
    let input = {
      transactionId, 
      timestamp: new Date().getTime(),
      burnAddress, 
      hash, 
      periodEndSeconds, 
      tokenAddress, 
      amount
    }

    await this.saveLog('exitTransaction',result);
    await this.saveTransactionId(input);
    return result;
  }

  
  async reclaimTransaction(artifact:any, transactionId: string){
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract = new ethers.Contract(artifact.address, artifact.abi, provider.getSigner());
    
    let tx = await contract.reclaimTransaction(transactionId);
    let result = await tx.wait();
    await this.saveLog('reclaimTransaction',result);
    return result;
  }

   
  async update(artifact:any, address: string, transactionId: string, hashSecret: string){

    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract = new ethers.Contract(artifact.address, artifact.abi, provider.getSigner());
    
    let tx = await contract.update(address, transactionId, hashSecret);
    let result = await tx.wait();
    await this.saveLog('update',result);
    return result;

  }

   
  async add(artifact:any, address: string, transactionId: string, burnAddress: string, hash: string, timeoutSeconds: string, tokenAddress: string, amount: string){

    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract = new ethers.Contract(artifact.address, artifact.abi, provider.getSigner());
    
    let tx = await contract.update(address, transactionId, burnAddress, hash, timeoutSeconds, tokenAddress, amount);
    let result = await tx.wait();
    await this.saveLog('add',result);
    return result;

  }

  
   
  async entryTransaction(artifact:any, amount: string, address: string, transactionId: string, hashSecret: string){

    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let contract = new ethers.Contract(artifact.address, artifact.abi, provider.getSigner());
    
    let tx = await contract.entryTransaction(address, amount, address, transactionId, hashSecret);
    let result = await tx.wait();
    await this.saveLog('entryTransaction', result);
    return result;

  }

  


  async saveTransactionId(input:any){
    await API.graphql({ query: mutations.createTx, variables: { input } });
  }


  async saveLog(transactionType: string, result: any){
    let input: any = {
     transactionType: transactionType,
      timestamp: new Date().getTime(),
      transactionHash: result.transactionHash
    };
    console.log(input);
    await API.graphql({ query: mutations.createLog, variables: { input } });
  }

  async saveContract(artifact:any, result: any) {
    let dt = new Date();

    let input: any = {
      abi: JSON.stringify(artifact.abi),
      name: artifact.contractName,
      address: result.address,
      symbol: '',
      network: Blockchain.getNetwork(window.ethereum.chainId),
      owner: window.ethereum.selectedAddress,
      initialBalance: '',
      timestamp: dt.getTime()
    };

    await API.graphql({ query: mutations.createContract, variables: { input } });
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
