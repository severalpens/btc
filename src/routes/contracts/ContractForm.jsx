//TODO: Refactor this component. Split into smaller components.
import React, { useState, useEffect } from "react";
import { API } from 'aws-amplify';

import { listContracts } from '../../graphql/queries';
import { createContract } from '../../graphql/mutations';
import { ethers } from "ethers";
 

const initialState = { symbol: 'BT', name: 'BasicToken', initialBalance: '1000', address: '', network: '', owner: '', artifact: {} };

const fileReader = new FileReader();

const Contract = (props) => {
  let network = 'Please use either Rinkeby or Ropsten only.';
  if (window.ethereum.networkVersion == 3) network = 'ropsten';
  if (window.ethereum.networkVersion == 4) network = 'rinkeby';

  let selectedAddress = window.ethereum.selectedAddress;

  const [contract, setContract] = useState([]);

  useEffect(() => {
  }, []);

  const handleFileRead = (e) => {
    let tmp = contract;
    tmp.artifact = fileReader.result;
    setContract(tmp);
  };

  //Refer to https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb
  const handleFileChosen = (file) => {
    if (file) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };


  const postToEthereum = async (c) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const factory = new ethers.ContractFactory(c.artifact.abi, c.artifact.bytecode, signer);
    const initialBalance = ethers.utils.parseEther(c.initialBalance);
    const deployment = await factory.deploy(initialBalance);
    const contract = await deployment.deployed();
    console.log(contract.address)
    return contract.address;

  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    let c = {};
    c.symbol = contract.symbol;
    c.name = contract.name;
    c.initialBalance = contract.initialBalance;
    c.network = network;
    c.owner = selectedAddress;
    c.artifact = contract.abi;


    c.address = postToEthereum(c);

    const newContract = await API.graphql({ query: createContract, variables: { input: c } });

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="symbol">Symbol</label>
          <br />
          <input id="symbol" name="symbol" defaultValue="BT"></input>
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" name="name"  defaultValue="BasicToken"></input>
        </div>


        <div>
          <label htmlFor="initialAmount">Initial Amount</label>
          <br />
          <input id="initialAmount" name="initialAmount" defaultValue="1000"></input>
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