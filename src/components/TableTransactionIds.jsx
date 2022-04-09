
export default function TableTransactionIds(props) {

   const {txs} = props;

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
              Transaction Hash
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              TransactionId
            </th>
          </tr>
          
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {txs.map((tx) => (
            <tr key={tx.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.transactionHash}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )

}
