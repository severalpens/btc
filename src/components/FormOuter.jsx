import React, { useState } from "react";
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
    blockchain.deploy({abi, bytecode, initialBalance});
  }


  return (
    <FormInner 
      handleFileChosen={handleFileChosen} 
      setInitialBalance={setInitialBalance} 
      handleSubmit={handleSubmit} 
    />
  );
}


export default FormOuter;