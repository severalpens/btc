//TODO: Refactor this component. Split into smaller components.
import React, { useState, useEffect } from "react";
import { API } from 'aws-amplify';

import { createContract } from '../../graphql/mutations';
import { ethers } from "ethers";

const initialState = { 
  symbol: 'BT', 
  name: 'BasicToken', 
  initialBalance: '1000', 
  address: '', 
  network: '', 
  owner: '', 
  abi: '', 
  parsedAbi: {}, 
  bytecode: '', 
  abiString: '',
  artifact: '',
  artifactString: ''
};

const fileReader = new FileReader();

const Contract = () => {

  let network = '';
  switch (window.ethereum.networkVersion) {
    case '3':
      network = 'ropsten';
      break;

    case '4':
      network = 'rinkeby';
      break;

    default:
      network = 'Please use either Rinkeby or Ropsten only.';
      break;
  }


  const [symbol, setSymbol] = useState(initialState.symbol);
  const [name, setName] = useState(initialState.name);
  const [initialBalance, setInitialBalance] = useState(initialState.initialBalance);
  const [artifact, setArtifact] = useState(initialState.artifact);
  const [artifactString, setArtifactString] = useState(initialState.artifactString);
  const [abi, setAbi] = useState(initialState.abi);
  const [parsedAbi, setParsedAbi] = useState(initialState.parsedAbi);
  const [abiString, setAbiString] = useState(initialState.abiString);
  const [bytecode, setBytecode] = useState(initialState.bytecode);






  useEffect(() => {
  }, []);





  const handleFileRead = (e) => {

    let strFileContents = fileReader.result;
    setArtifactString(strFileContents);

    let parsedFileContent = JSON.parse(strFileContents);
    setParsedAbi(parsedFileContent.abi);
    setAbi(JSON.stringify(parsedFileContent.abi));
    setAbiString(JSON.stringify(parsedFileContent.abi));
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
    newContract.artifact = artifactString;
    newContract.artifactString = artifactString;
    newContract.network = network;
    newContract.owner = window.ethereum.selectedAddress;
    newContract.bytecode = bytecode // bytecode;
    newContract.abi = abi // abiString;
    newContract.abiString = abi // abiString;


    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(parsedAbi, bytecode, signer);
    let balance = ethers.utils.parseEther(initialBalance);
    let deployment = await factory.deploy(balance);
    let result = await deployment.deployed();

    newContract.address = result.address;

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


export default Contract;