//TODO: Refactor this component. Split into smaller components.
import React, { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import { listContracts } from '../graphql/queries';
import { createContract } from '../graphql/mutations';



const initialState = { symbol: '', name: '', initialBalance: '', address: '', network: '' }

//Uploader component is the main functional component.
const Contracts = () => {


  //React hooks used to read/write variables
  const [artifact, setArtifact] = useState([]);
  const [contract, setContract] = useState([]);
  const [contracts, setContracts] = useState([]);
  let fileReader: FileReader;

  //TODO: Auto-populate contracts list on load. 
  useEffect(() => {
  }, []);


  const handleFileRead = (e: any) => {
    const content = fileReader.result;
    console.log(content)
  };

  //Refer to https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb
  const handleFileChosen = (file: File | undefined) => {
    if(file){
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  return (
    <div>
      <form action="submit" method="post">
        <div>
          <label htmlFor="symbol">Symbol</label>
          <br />
          <input id="symbol" name="symbol"></input>
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" name="name"></input>
        </div>


        <div>
          <label htmlFor="initialAmount">Initial Amount</label>
          <br />
          <input id="initialAmount" name="initialAmount"></input>
        </div>


        <div>
          <label htmlFor="artifact">Artifact JSON file</label>
          <br />
          <input type="file" id="artifact" name="artifact"  accept=".json"  onChange={e => handleFileChosen((e.target as HTMLInputElement)?.files?.[0])} />
        </div>



        <div>
          <button type="submit">Submit</button>
        </div>

      </form>

    </div>
  )


}

export default Contracts;

