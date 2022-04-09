import { useState, useEffect } from "react";
import BtcInterface from '../apis/BtcInterface';
import TableLogs from "./TableLogs";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import InputTransactionId from "./InputTransactionId";
import InputText from './InputText';
import { fetchTxs } from "../apis/DatabaseInterface";

const btcInterface = new BtcInterface();

export default function Reclaim(props) {

  const [address, setAddress] = useState('0x0');
  const [txs, setTxs] = useState([]);
  const [transactionId, setTransactionId] = useState('0x0');
  const [amount, setAmount] = useState('1');
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetchTxs(setTxs);
   }, []);
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    await btcInterface.reclaimTransaction(contract, transactionId);
  }


  return (
    <div className="flex">
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Reclaim</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-3 xl:w-96" >
            <label htmlFor="address" className="form-label inline-block mb-2 text-gray-700">
              Transaction ID
            </label >
            <InputTransactionId setTransactionId={setTransactionId} txs={txs}/>
          </div>
          <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
      </div>
      <TableLogs transactionType="reclaimTransaction" />
    </div>
  )
}
