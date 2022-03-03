import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations'
import * as subscriptions from '../graphql/mutations'
import Table from './Table2';
import { Link } from 'react-router-dom';

export default function Contracts(props) {

  const [contracts, setContracts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let graphqlResult = await API.graphql({ query: queries.listContracts });
      console.log('graphqlResult',graphqlResult);
      let cl = graphqlResult.data.listContracts.items;
      setContracts(cl);
    }
   fetchData();

  }, []);


  const addContract = async (e) => {
    const contractDetails = {
      name: 'New Contract',
      symbol: 'String',
      address: 'String',
      initialBalance: 'String',
      network: 'String',
      owner: 'String',
      abi: '',
      timestamp: 12344566
  };
    
    const newContract = await API.graphql({ query: mutations.createContract, variables: {input: contractDetails}});
    console.log(newContract);
  }

  const deleteRecordHandler = async (e) => {
    let input = {id: contracts[0].id};
    console.log(input);
    const deletedTodo = await API.graphql({ query: mutations.deleteTodo, variables: {input}});
  }

  return (
    <div className="m-28">
      <h1>Contracts</h1>
      <button
        type="submit"
        className="border m-4 hover:bg-red-200 px-6 py-2.5 border-black rounded-md"
        onClick={e => deleteRecordHandler(e)}>
          Delete First
      </button>      
      
      <button
        type="submit"
        className="border m-4 hover:bg-green-200 px-6 py-2.5 border-black rounded-md"
        onClick={e => addContract(e)}>
          Add Contract
      </button>


      <Table contracts={contracts} />
      <h1>
        <Link to="/contractForm" >Deploy New Contract</Link>
      </h1>

    </div>
  )

}
