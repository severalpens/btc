import React, { Component } from 'react'
import { ethers } from "ethers";

export default class Blockchain {

     async deploy (parsedAbi, bytecode, initialBalance = 1000)  {
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        let signer = provider.getSigner();
        let factory = new ethers.ContractFactory(parsedAbi, bytecode, signer);
        let balance = ethers.utils.parseEther(initialBalance);    
        let hasConstructor = parsedAbi.find(x => x.type && x.type === "constructor");
        let deployment = hasConstructor ? await factory.deploy(balance) : await factory.deploy();
        let result = await deployment.deployed();
        return result;
      }

      async deploy2 (props){

      }

      async save(){
        
      }
      
      getNetwork() {
        switch (window.ethereum.networkVersion) {
          case '3':
            return 'ropsten';
          case '4':
            return 'rinkeby';
          default:
            return 'Please use either Rinkeby or Ropsten only.';
        }
      }

      
}
