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
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
  );

  
}


export default FormInner;