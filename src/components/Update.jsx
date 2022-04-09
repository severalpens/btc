import { useState, useEffect } from "react";
import BtcInterface from '../apis/BtcInterface';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import InputContract from "./InputContract";
import InputTransactionId from "./InputTransactionId";
import InputHash from "./InputHash";
import TableLogs from "./TableLogs";
import InputHashSecret from "./InputHashSecret";
import { fetchContracts, fetchHashPairs, fetchTxs } from "../apis/DatabaseInterface";

const btcInterface = new BtcInterface();

export default function Update(props) {
  
  const [contracts, setContracts] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);
  const [hashSecret, setHashSecret] = useState(null);
  const [txs, setTxs] = useState([]);
  const [transactionId, setTransactionId] = useState('0x0');
  const [hashPairs, setHashPairs] = useState([]);



    useEffect(() => {
      fetchContracts(setContracts);
      fetchHashPairs(setHashPairs);
      fetchTxs(setTxs);
    }, []);
  
  
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
     await btcInterface.update(contract, contractAddress, transactionId, hashSecret);
  }


  return (
    <div className="flex">
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Update</h2>
      <div className="italic mb-8">sender agent</div>
      <form className="" onSubmit={handleSubmit}>
        {/* Contract Address */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="contractAddress" className="form-label inline-block mb-2 text-gray-700">
            Contract Address
          </label >
          <InputContract contracts={contracts} setAddress={setContractAddress}/>
        </div>

        {/* Transaction Id */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="transactionId" className="form-label inline-block mb-2 text-gray-700">
            Transaction Id 
          </label >
          <InputTransactionId setTransactionId={setTransactionId} txs={txs}/>
        </div>
        {/* Hash Secret */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="hashSecret" className="form-label inline-block mb-2 text-gray-700">
            Hash Secret
          </label >
          <InputHashSecret hashPairs={hashPairs} setHashSecret={setHashSecret} />
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
      </div>
      <TableLogs transactionType="update" />
      </div>
  )
}
