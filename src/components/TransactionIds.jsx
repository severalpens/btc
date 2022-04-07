import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { Link } from 'react-router-dom';

export default function TransactionIds(props) {

  const [txs, setTxs] = useState([]);

  useEffect(() => {
   fetchData();
  }, []);

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listTxs });
    let ll = graphqlResult.data.listTxs.items
    setTxs(ll);
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
              Transaction Hash
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Burn Address
            </th>
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
              Period End Seconds
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Token Address
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              TransactionId
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Timestamp
            </th>

          </tr>
          
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {txs.map((tx) => (
            <tr key={tx.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.transactionHash}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.burnAddress}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.hash}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.periodEndSeconds}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.tokenAddress}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.transactionId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
