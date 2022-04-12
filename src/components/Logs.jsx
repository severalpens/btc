import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Link } from 'react-router-dom';

export default function Logs(props) {
  
  const [logs, setLogs] = useState([]);

  useEffect(() => {
   fetchData();
  }, []);
  

     
  const deleteRecordHandler = async (log) => {
    let input = {id: log.id, _version: 1};
    await API.graphql({ query: mutations.deleteLog, variables: {input}});
    await fetchData();
  }


  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listLogs });
    let a = graphqlResult.data.listLogs.items.filter(x => !x._deleted).sort((a,b) => b-a);
    setLogs(a);
  }



  return (
    <div className="m-28">
      <h2 className="text-3xl text-gray-700">Logs</h2>
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Timestamp
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Transaction Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Transaction Hash
            </th>
            <th scope="col" className="relative px-6 py-3"><span className="sr-only"></span></th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {logs.map((log) => (
            <tr key={log.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{log.timestamp}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{log.transactionType}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{log.transactionHash}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md" 
                onClick={e => deleteRecordHandler(log)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
