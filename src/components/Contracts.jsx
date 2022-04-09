import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/mutations';
import TableContracts from './TableContracts';
import { Link } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import { fetchContracts } from "../apis/DatabaseInterface";

export default function Contracts(props) {
  const [contracts, setContracts] = useState(null);
  const [currentContract, setCurrentContract] = useOutletContext();

  useEffect(() => {
   fetchContracts(setContracts);
  }, []);

    
  const deleteRecordHandler = async (contract) => {
    let input = {id: contract.id, _version: 1};
    await API.graphql({ query: mutations.deleteContract, variables: {input}});
    fetchContracts(setContracts);
  }

  return (
    <div className="m-28">
      <h2 className="text-3xl text-gray-700">Contracts</h2>
      <button
        type="submit"
        className="border m-4  px-6 py-2.5 border-black rounded-md">
        <Link to="/transactions/deploy" >Deploy New Contract</Link>
      </button>      
      <TableContracts contracts={contracts} deleteRecordHandler={deleteRecordHandler} setCurrentContract={setCurrentContract} />
    </div>
  )

}
