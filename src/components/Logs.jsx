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

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listLogs });
    let cl = graphqlResult.data.listLogs.items
    .filter(x => x.transactionType === props.transactionType && !x._deleted)
    .sort((a,b) => a.timestamp > b.timestamp);
    setLogs(cl);
  }
    

  return (
    <div className="mt-28 mx-4">
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
              Logs
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {logs.map((log) => (
            <tr key={log.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={"https://rinkeby.etherscan.io/tx/"+log.transactionHash} target="_blank" rel="noreferrer">
                {log.transactionHash.slice(0,5)+"..."}
                </a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
