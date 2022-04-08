import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Link } from 'react-router-dom';


export default function Accounts(props) {
  
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
   fetchData();
  }, []);
  

     
  const deleteRecordHandler = async (account) => {
    let input = {id: account.id, _version: 1};
    await API.graphql({ query: mutations.deleteAccount, variables: {input}});
    await fetchData();
  }


  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listAccounts });
    let a = graphqlResult.data.listAccounts.items.filter(x => !x._deleted);
    setAccounts(a);
  }

  async function addAccount(e){
    e.preventDefault();
    const apiName = 'api2';
    const path = '/hashpair';
    let input = await API.get(apiName, path);
     console.log(input);
     await API.graphql({ query: mutations.createHashPair, variables: { input } });
     await fetchData();
  }
    

  return (
    <div className="m-28">
      <h2 className="text-3xl text-gray-700">Accounts</h2>
      <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md" onClick={addAccount}>
        Add Account
      </button>
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
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{account.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{account.address}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{account.privateKey}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md" 
                onClick={e => deleteRecordHandler(account)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
