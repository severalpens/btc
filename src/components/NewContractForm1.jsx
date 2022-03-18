import { useState, useEffect } from "react";
import Blockchain from './Blockchain';

// component formatted using https://tailwind-elements.com/docs/standard/forms/form-templates/

import BasicToken from './BasicToken';
import BurnToClaim from './BurnToClaim';


const blockchain = new Blockchain();
const fileReader = new FileReader();

//Refer to https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb

export default function NewContractForm1(props) {

  const [contractType, setContractType] = useState('0');
  const [customArtifact, setCustomArtifact] = useState(BasicToken.abi);
  const [initialBalance, setInitialBalance] = useState('10000');

  useEffect(() => {
  }, []);

  const handleContractType = (e) => {
    let ct = e.target.value;
    setContractType(ct);
  }

  const handleFileRead = (e) => {
    let strFileContents = fileReader.result;
    let parsedFile = JSON.parse(strFileContents);
    setCustomArtifact(parsedFile);
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
    switch (parseInt(contractType)) {
      case 0:
        blockchain.deploy(BurnToClaim.abi, BurnToClaim.bytecode);
        break;
      case 1:
        blockchain.deploy(customArtifact.abi, customArtifact.bytecode);
        break;
      case 2:
        blockchain.deploy(BasicToken.abi, BasicToken.bytecode, initialBalance);
        break;
      case 3:
        blockchain.deploy(customArtifact.abi, customArtifact.bytecode, initialBalance);
        break;
      default:
        break;
    }
  }




  return (
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Deploy New Contract</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700" htmlFor="contract-type">Contract Type</label>
          <select id='contract-type' name='contract-type' className="
            form-select 
            appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 
            focus:bg-white 
            focus:border-blue-600 
            focus:outline-none"
            aria-label="Default select example" onChange={handleContractType}>
            <option value="0">--</option>
            <option value="1">Burn to Claim - Default</option>
            <option value="2">Burn to Claim - New Artifact</option>
            <option value="3">ERC20 - Default</option>
            <option value="4">ERC20 - New Artifact</option>
          </select>
        </div>
        <div className="mb-3 w-96">
          <label htmlFor="artifact" className="form-label inline-block mb-2 text-gray-700">Artifact</label>
          <input className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white
                    bg-clip-padding
                    border
                    border-solid
                    border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
            type="file"
            id="artifact"
            name="artifact"
            accept=".json"
            onChange={handleFileChosen}
            disabled={contractType === '1' || contractType === '3'}
          />
        </div>
        <div className="mb-3 xl:w-96" hidden={contractType === '1' || contractType === '2'}>
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
            Initial Balance
          </label >
          <input type="text" className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700
      focus:bg-white 
      focus:border-blue-600 
      focus:outline-none
    "
            placeholder="10000"
            id="initialBalance"
            name="initialBalance"
            defaultValue="10000"
            onChange={e => setInitialBalance(e.target.value)}
          />
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
    </div>
  )
}
