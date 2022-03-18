import { useState, useEffect } from "react";
import Blockchain from './Blockchain';

import BasicToken from './BasicToken';
import BurnToClaim from './BurnToClaim';

const blockchain = new Blockchain();
const fileReader = new FileReader();

//Refer to https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb

export default function FormArtifact(props) {

  const [contractType, setContractType] = useState('ERC20');
  const [defaultArtifact, setDefaultArtifact] = useState(true);
  const [abi, setAbi] = useState(BasicToken.abi);
  const [bytecode, setBytecode] = useState(BasicToken.bytecode);


  useEffect(() => {

  }, []);

  const handleFileRead = (e) => {
    let strFileContents = fileReader.result;
    let parsedFile = JSON.parse(strFileContents);
    setAbi(parsedFile.abi);
    setBytecode(parsedFile.bytecode);
  };


  const handleFileChosen = (file) => {
    if (file) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };


  const handleContractType = (e) => {
    let ct = e.target.value;
    setContractType(ct);
  }
  
  const handleDefaultArtifact = (e) => {
    setDefaultArtifact(!defaultArtifact)
    
        if (defaultArtifact) {
          if (contractType === 'ERC20') {
            setAbi(BasicToken.abi);
            setBytecode(BasicToken.bytecode);
          }
          if (contractType === 'Burn to Claim') {
            setAbi(BurnToClaim.abi);
            setBytecode(BurnToClaim.bytecode);
          }
        }
  }


  return (
    <>
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
          <option value="none">--</option>
          <option value="BTC">Burn to Claim</option>
          <option value="ERC20">ERC20</option>
        </select>
      </div>

      <div className="form-check">
        <input className="
        form-check-input 
        appearance-none 
        h-4 
        w-4 
        border 
        border-gray-300 
        rounded-sm 
        bg-white 
        checked:bg-blue-600 
        checked:border-blue-600 
        focus:outline-none 
        transition 
        duration-200 
        mt-1 
        align-top 
        bg-no-repeat 
        bg-center 
        bg-contain 
        float-left 
        mr-2 
        cursor-pointer"
          type="checkbox"
          id="flexCheckDefault"
          onChange={handleDefaultArtifact}
          checked={defaultArtifact}
          />
        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
          Use default contract artifact
        </label>
      </div>

      <div className="mb-3 w-96">
        <label htmlFor="artifact" className="form-label inline-block mb-2 text-gray-700">Artifact</label>
        <input className="form-control
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
          type="file"
          id="artifact"
          name="artifact"
          accept=".json"
          onChange={handleFileChosen}
          disabled={defaultArtifact}
        />
      </div>
    </>
  )
}