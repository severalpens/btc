import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Link } from 'react-router-dom';

export default function Contracts(props) {

  const [contracts, setContracts] = useState([]);

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
    <div className="mt-28">
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Network
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Address
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Owner
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{contract.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{contract.network}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contract.address}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contract.owner.slice(0,5) + '...' + contract.owner.slice(contract.owner.length - 4)}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
