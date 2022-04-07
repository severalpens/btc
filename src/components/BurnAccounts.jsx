import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Link } from 'react-router-dom';
import {ethers} from 'ethers';

export default function BurnAccounts(props) {
  
  const [burnAccounts, setBurnAccounts] = useState([]);

  useEffect(() => {
   fetchData();
  }, []);
  

     
  const deleteRecordHandler = async (burnAccount) => {
    let input = {id: burnAccount.id, _version: 1};
    await API.graphql({ query: mutations.deleteBurnAccount, variables: {input}});
    await fetchData();
  }


  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listBurnAccounts });
    let hps = graphqlResult.data.listBurnAccounts.items.filter(x => !x._deleted);
    setBurnAccounts(hps);
  }

  async function newBurnAccount(e){
    e.preventDefault();
    let input = ethers.Wallet.createRandom();
     console.log(input);
     await API.graphql({ query: mutations.createBurnAccount, variables: { input } });
     await fetchData();
  }
    

  return (
    <div className="m-28">
      <h2 className="text-3xl text-gray-700">Burn Accounts</h2>
      <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md" onClick={newBurnAccount}>
        Create New Burn Account
      </button>
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
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
              Private Key
            </th>
            <th scope="col" className="relative px-6 py-3"><span className="sr-only"></span></th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {burnAccounts.map((burnAccount) => (
            <tr key={burnAccount.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{burnAccount.address}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{burnAccount.privateKey}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md" 
                onClick={e => deleteRecordHandler(burnAccount)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
