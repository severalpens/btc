import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/mutations';
import TableInner from './TableInner';
import { Link } from 'react-router-dom';

export default function TableOuter(props) {
  const [contracts, setContracts] = useState(null);

  useEffect(() => {
   fetchData();
  }, []);

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listContracts });
    let cl = graphqlResult.data.listContracts.items.filter(x => !x._deleted);
    console.log(cl);
    setContracts(cl);
  }
    
  const deleteRecordHandler = async (contract) => {
    let input = {id: contract.id, _version: 1};
    await API.graphql({ query: mutations.deleteContract, variables: {input}});
    await fetchData();
  }

  return (
    <div className="m-28">
      <h2 className="text-3xl text-gray-700">Contracts</h2>
      <button
        type="submit"
        className="border m-4  px-6 py-2.5 border-black rounded-md">
        <Link to="/deploy" >Deploy New Contract</Link>
      </button>      
      <TableInner contracts={contracts} deleteRecordHandler={deleteRecordHandler} />
    </div>
  )

}
