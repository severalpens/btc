import { useState, useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listContracts } from '../graphql/queries';
import { deleteContract } from "../graphql/mutations";
import Table from './Table2';
import { Link } from 'react-router-dom';

export default function Contracts(props) {

  const [contracts, setContracts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let graphqlResult = await API.graphql({ query: listContracts });
      console.log('graphqlResult',graphqlResult);
      let cl = graphqlResult.data.listContracts.items;
      setContracts(cl);
    }

    fetchData();

  }, []);


  const deleteAllHandler = async (e) => {
    console.log(contracts[0]);
    await API.graphql(graphqlOperation(deleteContract, {input: contracts[0]}))

  }

  return (
    <div className="m-28">
      <h1>Contracts</h1>
      <button
        type="submit"
        className="
        inline-block 
        px-6 
        py-2.5 
        bg-blue-600 
        text-white 
        font-medium 
        text-xs 
        leading-tight 
        uppercase 
        rounded 
        shadow-md 
        hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={e => deleteAllHandler(e)}>
          Delete First
      </button>
      <Table contracts={contracts} />
      <h1>
        <Link to="/contractForm" >Deploy New Contract</Link>
      </h1>

    </div>
  )

}
