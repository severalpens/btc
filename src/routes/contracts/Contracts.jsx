import  { useState, useEffect } from "react";

import { API } from 'aws-amplify';

import { listContracts } from '../../graphql/queries';

import ContractList from './ContractList';


import {  Link } from 'react-router-dom';


export default function Contracts(props) {

  const [contracts, setContracts] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      let graphqlResult = await API.graphql({query: listContracts});
      let cl = graphqlResult.data.listContracts.items;
      setContracts(cl);
    }
    
    fetchData();

  },[])

  return (
    <div>
      <h1>Contracts</h1>
      <ContractList contracts={contracts}/>
      <h1><Link to="/contractForm" >Deploy New Contract</Link></h1>

    </div>
  )

}
