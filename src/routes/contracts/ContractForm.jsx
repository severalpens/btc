import React, { useState } from "react";
import { API } from 'aws-amplify';
import { ethers } from "ethers";
import { createContract } from '../../graphql/mutations';

const deploy = async (parsedAbi, bytecode, initialBalance = 1000) => {
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
    case '4':
      return 'rinkeby';
    default:
      return 'Please use either Rinkeby or Ropsten only.';
  }
}

const fileReader = new FileReader();

const ContractForm = () => {

  const [symbol, setSymbol] = useState('');
  const [name, setName] = useState('');
  const [initialBalance, setInitialBalance] = useState('10000');
  const [abi, setAbi] = useState({});
  const [parsedAbi, setParsedAbi] = useState('');
  const [bytecode, setBytecode] = useState('');


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
    newContract.network = getNetwork();
    newContract.owner = window.ethereum.selectedAddress;
    newContract.abi = abi;
    let deployedContract = await deploy(parsedAbi, bytecode, initialBalance);
    newContract.address = deployedContract.address;

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
          <input id="initialBalance" name="initialBalance" defaultValue="10000" onChange={e => setInitialBalance(e.target.value)}></input>
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