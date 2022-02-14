import React, { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import { ethers } from "ethers";
import { createContract } from '../../graphql/mutations';

const storage = { 
  symbol: 'BT', 
  name: 'BasicToken', 
  initialBalance: '1000', 
  address: '', 
  network: '', 
  owner: '', 
  abi: '', 
};

const deploy = async (parsedAbi, bytecode, initialBalance) => {
      
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer = provider.getSigner();
  let factory = new ethers.ContractFactory(parsedAbi, bytecode, signer);
  let balance = ethers.utils.parseEther(initialBalance);    
  let hasConstructor = parsedAbi.find(x => x.type && x.type === "constructor");
  let deployment = hasConstructor ? await factory.deploy(balance) : await factory.deploy();
  let result = await deployment.deployed();
  return result;

}

const getNetwork = () => {
  switch (window.ethereum.networkVersion) {
    case '3':
      return 'ropsten';
      break;

    case '4':
      return 'rinkeby';
      break;

    default:
      return 'Please use either Rinkeby or Ropsten only.';
      break;
  }

}

let network = getNetwork();
const fileReader = new FileReader();

const ContractForm = () => {
  const [symbol, setSymbol] = useState(storage.symbol);
  const [name, setName] = useState(storage.name);
  const [initialBalance, setInitialBalance] = useState(storage.initialBalance);
  const [abi, setAbi] = useState(storage.abi);
  const [parsedAbi, setParsedAbi] = useState(storage.parsedAbi);
  const [bytecode, setBytecode] = useState(storage.bytecode);

  const handleFileRead = (e) => {
    let strFileContents = fileReader.result;
    let parsedFileContent = JSON.parse(strFileContents);
    setParsedAbi(parsedFileContent.abi);
    setAbi(JSON.stringify(parsedFileContent.abi));
    setBytecode(parsedFileContent.bytecode);
  };



  //Refer to https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb
  const handleFileChosen = (file) => {
    if (file) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    let newContract = {};
    newContract.symbol = symbol;
    newContract.name = name;
    newContract.initialBalance = initialBalance;
    newContract.network = network;
    newContract.owner = window.ethereum.selectedAddress;
    newContract.abi = abi;
    newContract.address = await deploy(parsedAbi, bytecode, initialBalance);

    await API.graphql({ query: createContract, variables: { input: newContract } });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="symbol">Symbol</label>
          <br />
          <input id="symbol" name="symbol" defaultValue="Test" onChange={e => setSymbol(e.target.value)}></input>
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" name="name" defaultValue="BasicToken" onChange={e => setName(e.target.value)}></input>
        </div>

        <div>
          <label htmlFor="initialBalance">Initial Balance</label>
          <br />
          <input id="initialBalance" name="initialBalance" defaultValue="1000" onChange={e => setInitialBalance(e.target.value)}></input>
        </div>


        <div>
          <label htmlFor="artifact">Artifact JSON file</label>
          <br />
          <input type="file" id="artifact" name="artifact" accept=".json" onChange={e => handleFileChosen((e.target)?.files?.[0])} />
        </div>



        <div>
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );



}


export default ContractForm;