//TODO: Refactor this component. Split into smaller components.
import  { useState, useEffect } from "react";

import { API } from 'aws-amplify';

import { listContracts } from '../../graphql/queries';

import ContractList from './ContractList';


export default function Contracts() {

  const [contracts, setContracts] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      let graphqlResult = await API.graphql({query: listContracts});
      let cl = graphqlResult.data.listContracts.items;
      console.log('cl',cl)
      if (!contracts) {
        setContracts(cl);
      }
    }
    fetchData();
  }, [contracts])


    async function fetchData() {
      let graphqlResult = await API.graphql({query: listContracts});
      let cl = graphqlResult.data.listContracts.items;
      console.log('cl',cl)
      if (!contracts) {
        setContracts(cl);
      }
    }





  return (
    <div>
      <ContractList fetchData={fetchData}/>
    </div>
  )
}
