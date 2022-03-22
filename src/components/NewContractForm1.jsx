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
  const [errors, setErrors] = useState('');


  const [ctError1, setCtError1] = useState('');
  const [aError1, setAError1] = useState('');
  const [aError2, setAError2] = useState('');
  const [ibError1, setIbError1] = useState('');

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
    console.log(file)
    if (file) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    switch (parseInt(contractType)) {
      case 0:
        setCtError1('No contract chosen');
        break;
      case 1:
        blockchain.deployBtc(BurnToClaim);
        break;
      case 2:
        blockchain.deployBtc(customArtifact);
        break;
      case 3:
        blockchain.deployBasicToken(BasicToken, initialBalance);
        break;
      case 4:
        blockchain.deployBasicToken(customArtifact, initialBalance);
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
          <div className="text-red-600">{errors}</div>
        </div>
        <div className="mb-3 w-96" hidden={['0','1','3'].includes(contractType)}>
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
            onChange={e => handleFileChosen(e.target.files[0])}
            
          />
        </div>
        <div className="mb-3 xl:w-96" hidden={['0','1','2'].includes(contractType)}>
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
