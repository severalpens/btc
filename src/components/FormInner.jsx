import  { useState } from "react";

import FormArtifact from "./FormArtifact";
import FormInitialBalance from "./FormInitialBalance";
import FormContractType from "./FormContractType";

const FormInner = (props) => {
  const [contractType, setContractType] = useState('');

  const handleContractTypeChange = (e) =>{
    setContractType('');
  }

// component formatted using https://tailwind-elements.com/docs/standard/forms/form-templates/
  return (
      <form  className="" onSubmit={props.handleSubmit}>
        <FormContractType handleContractTypeChange = {handleContractTypeChange}/>
        <FormArtifact handleFileChosen={props.handleFileChosen}/>
        <FormInitialBalance setInitialBalance={props.setInitialBalance}/>
        <button type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
      </form>
  );

  
}


export default FormInner;