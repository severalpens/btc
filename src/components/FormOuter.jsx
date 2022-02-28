import { useState } from "react";
import Blockchain from './Blockchain';
import FormInner from './FormInner';

const blockchain = new Blockchain();
const fileReader = new FileReader();

const FormOuter = (props) => {

  const [abi, setAbi] = useState({});
  const [bytecode, setBytecode] = useState({});
  const [initialBalance, setInitialBalance] = useState('10000');

  const handleFileRead = (e) => {
    let strFileContents = fileReader.result;
    let parsedFile = JSON.parse(strFileContents);
    setAbi(parsedFile.abi);
    setBytecode(parsedFile.bytecode);
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
    blockchain.deploy({ abi, bytecode, initialBalance });
  }


  return (
    <div className="ml-16 my-16 ">
      <h2 class="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Deploy New Contract</h2>
      <FormInner
        setInitialBalance={setInitialBalance}
        handleFileChosen={handleFileChosen}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}


export default FormOuter;