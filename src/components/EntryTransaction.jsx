import { useState, useEffect } from "react";
import BtcInterface from '../apis/BtcInterface';
import InputContract from "./InputContract";
import InputTransactionId from "./InputTransactionId";
import InputHash from "./InputHash";
import TableLogs from "./TableLogs";
import { fetchContracts, fetchHashPairs, fetchTxs, fetchBurnAccounts } from "../apis/DatabaseInterface";

const btcInterface = new BtcInterface();

export default function EntryTransaction(props) {

  const [contractAddress, setContractAddress] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [timeoutSeconds, setTimeoutSeconds] = useState(null);
  const [contracts, setContracts] = useState(null);
  const [hashPairs, setHashPairs] = useState([]);
  const [hash, setHash] = useState('0x0');
  const [tokenAddress, setTokenAddress] = useState('0x0');
  const [amount, setAmount] = useState('1');
  const [txs, setTxs] = useState([]);
  const [address, setAddress] = useState(null);


    useEffect(() => {
      fetchContracts();
      fetchHashPairs();
      fetchTxs();
      fetchBurnAccounts();
    }, []);
  

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    await btcInterface.entryTransaction(contract, tokenAddress,amount);
  }


  return (
    <div className="flex">
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Entry Transaction</h2>
      <div className="italic mb-8">recipient agent</div>
      <form className="" onSubmit={handleSubmit}>
        
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


        {/* Contract Address */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="contractAddress" className="form-label inline-block mb-2 text-gray-700">
            Contract Address
          </label >
          <InputContract contracts={contracts} setAddress={setContractAddress}/>
        </div>

        {/* TransactionId */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="transactionId" className="form-label inline-block mb-2 text-gray-700">
            Transaction Id
          </label >
          <InputTransactionId setTransactionId={setTransactionId} txs={txs}/>
        </div>

        {/* Hash */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="hash" className="form-label inline-block mb-2 text-gray-700">
            Hash 
          </label >
          <InputHash hashPairs={hashPairs} setHash={setHash} />
        </div>

        {/* Timeout Seconds Secret */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="timeoutSeconds" className="form-label inline-block mb-2 text-gray-700">
            Timeout Seconds 
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
            placeholder="240"
            id="timeoutSeconds"
            name="timeoutSeconds"
            defaultValue="240"
            onChange={e => setTimeoutSeconds(e.target.value)}
          />
        </div>


        {/* Token Address */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="tokenAddress" className="form-label inline-block mb-2 text-gray-700">
            Token Address 
          </label >
          <InputContract setAddress={setAddress} contracts={contracts}/>

        </div>



        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
      </div>
      <TableLogs transactionType="entryTransaction" />
      </div>
  )
}
