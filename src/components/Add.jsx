import { useState, useEffect } from "react";
import InputContract from "./InputContract";
import InputTransactionId from "./InputTransactionId";
import InputBurnAccount from "./InputBurnAccount";
import InputHash from "./InputHash";
import TableLogs from "./TableLogs";
import { fetchBurnAccounts, fetchContracts, fetchHashPairs, fetchTxs } from "../apis/DatabaseInterface";
import BtcInterface from '../apis/BtcInterface';
import InputNumber from "./InputNumber";

const btcInterface = new BtcInterface();

export default function Add(props) {
  const [contractAddress, setContractAddress] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [timeoutSeconds, setTimeoutSeconds] = useState(null);
  const [contracts, setContracts] = useState(null);
  const [burnAccounts, setBurnAccounts] = useState([]);
  const [hashPairs, setHashPairs] = useState([]);
  const [burnAddress, setBurnAddress] = useState('0x0');
  const [hash, setHash] = useState('0x0');
  const [amount, setAmount] = useState('1');
  const [txs, setTxs] = useState([]);
  const [tokenAddress, setTokenAddress] = useState('0x0');

  useEffect(() => {
    fetchContracts(setContracts);
    fetchHashPairs(setHashPairs);
    fetchTxs(setTxs);
    fetchBurnAccounts(setBurnAccounts);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    await btcInterface.add(contract, contractAddress,transactionId, burnAddress, hash, timeoutSeconds, tokenAddress, amount);
  }

  return (
    <div className="flex">
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Add</h2>
        <div className="italic mb-8">recipient agent</div>
        <form className="" onSubmit={handleSubmit}>

          {/* Contract Address */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="contractAddress" className="form-label inline-block mb-2 text-gray-700">
              Contract Address
            </label >
            <InputContract contracts={contracts} setAddress={setContractAddress} />
          </div>
          {/* TransactionId */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="transactionId" className="form-label inline-block mb-2 text-gray-700">
              Transaction Id
            </label >
            <InputTransactionId setTransactionId={setTransactionId} txs={txs} />
          </div>

          {/* Burn Account Address */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="burnAccountAddress" className="form-label inline-block mb-2 text-gray-700">
              Burn Account Addresss
            </label >
            <InputBurnAccount burnAccounts={burnAccounts} setAddress={setBurnAddress} />
          </div>

          {/* Hash */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="hash" className="form-label inline-block mb-2 text-gray-700">
              Hash
            </label >
            <InputHash hashPairs={hashPairs} setHash={setHash} />
          </div>

          {/* Timeout Seconds */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="timeoutSeconds" className="form-label inline-block mb-2 text-gray-700">
              Timeout Seconds
            </label >
            <InputNumber elementId="timeoutSeconds" setItem={setTimeoutSeconds}/>
          </div>

          {/* Token Address */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="tokenAddress" className="form-label inline-block mb-2 text-gray-700">
              Token Address
            </label >
            <InputContract setAddress={setTokenAddress} contracts={contracts} />
          </div>

          {/* Amount */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="amount" className="form-label inline-block mb-2 text-gray-700">
              Amount
            </label >
            <input type="text" className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700
      focus:bg-white 
      focus:border-blue-600 
      focus:outline-none
    "
              placeholder="1"
              id="amount"
              name="amount"
              defaultValue="1"
              onChange={e => setAmount(e.target.value)}
            />
          </div>

          <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
      </div>
      <TableLogs transactionType="add" />
    </div>
  )
}
