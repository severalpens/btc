import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Link } from 'react-router-dom';


export default function HashPairs(props) {
  
  const [hashPairs, setHashPairs] = useState([]);

  useEffect(() => {
   fetchData();
  }, []);
  

     
  const deleteRecordHandler = async (hashPair) => {
    let input = {id: hashPair.id, _version: 1};
    await API.graphql({ query: mutations.deleteHashPair, variables: {input}});
    await fetchData();
  }


  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listHashPairs });
    let hps = graphqlResult.data.listHashPairs.items.filter(x => !x._deleted);
    setHashPairs(hps);
  }

  async function newHashPair(e){
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
      <h2 className="text-3xl text-gray-700">Hash Pairs</h2>
      <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md" onClick={newHashPair}>
        Create New Hash Pair
      </button>
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Hash
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Secret
            </th>
            <th scope="col" className="relative px-6 py-3"><span className="sr-only"></span></th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {hashPairs.map((hashPair) => (
            <tr key={hashPair.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{hashPair.hash}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{hashPair.secret}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md" 
                onClick={e => deleteRecordHandler(hashPair)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
