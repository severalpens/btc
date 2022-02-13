//TODO: Refactor this component. Split into smaller components.
import React, { useState, useEffect } from "react";
import { API } from 'aws-amplify';

import { listContracts } from '../../graphql/queries';
import { createContract } from '../../graphql/mutations';
import { ethers } from "ethers";
 

const initialState = { symbol: 'BT', name: 'BasicToken', initialBalance: '1000', address: '', network: '', owner: '', artifact: {}, abi: '' };

const fileReader = new FileReader();

const Contract = (props) => {
  let network = 'Please use either Rinkeby or Ropsten only.';
  if (window.ethereum.networkVersion == 3) network = 'ropsten';
  if (window.ethereum.networkVersion == 4) network = 'rinkeby';

  let selectedAddress = window.ethereum.selectedAddress;

  const [symbol, setSymbol] = useState(initialState.symbol);
  const [name, setName] = useState(initialState.name);
  const [initialBalance, setInitialBalance] = useState(initialState.initialBalance);
  const [owner, setOwner] = useState(initialState.owner);
  const [artifact, setArtifact] = useState(initialState.artifact);
  const [abi, setAbi] = useState(initialState.abi);

  useEffect(() => {
  }, []);

  const handleFileRead = (e) => {
    let strFileContents = fileReader.result;
    let jsonFileContents = JSON.parse(strFileContents);
    setAbi(jsonFileContents.abi)

  };

  //Refer to https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb
  const handleFileChosen = (file) => {
    if (file) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };


  // const postToEthereum = async (c) => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
  //   const deployment = await factory.deploy(ethers.utils.parseEther(initialBalance));
  //   const contract = await deployment.deployed();
  //   return contract.address;
  // }


  const handleSubmit = async (event) => {
    event.preventDefault();

    let c = {};
    c.symbol = symbol;
    c.name = name;
    c.initialBalance = initialBalance;
    c.network = network;
    c.owner = selectedAddress;
    c.abi = abi;


    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
    let balance = ethers.utils.parseEther(initialBalance);
    let deployment = await factory.deploy(balance);
    let result = await deployment.deployed();

    c.address = result.address;

    await API.graphql({ query: createContract, variables: { input: c } });

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
          <input id="name" name="name"  defaultValue="BasicToken" onChange={e => setName(e.target.value)}></input>
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