import { useState, useEffect } from "react";
import BtcInterface from '../apis/BtcInterface';
import TransactionIds from "./TransactionIds";
import InputHash from "./InputHash";
import InputBurnAccount from "./InputBurnAccount";
import InputContract from "./InputContract";
import InputText from "./InputText";
import { fetchBurnAccounts, fetchContracts, fetchHashPairs } from "../apis/DatabaseInterface";

const btcInterface = new BtcInterface();

export default function ExitTransaction(props) {
  const [contracts, setContracts] = useState(null);
  const [burnAccounts, setBurnAccounts] = useState([]);
  const [hashPairs, setHashPairs] = useState([]);
  const [burnAddress, setBurnAddress] = useState('0x0');
  const [hash, setHash] = useState('0x0');
  const [periodEndSeconds, setPeriodEndSeconds] = useState('0x0');
  const [tokenAddress, setTokenAddress] = useState('0x0');
  const [amount, setAmount] = useState('1');

  useEffect(() => {
    fetchContracts(setContracts);
    fetchBurnAccounts(setBurnAccounts);
    fetchHashPairs(setHashPairs);
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
   await btcInterface.exitTransaction(contract, tokenAddress,amount);
  }


  return (
    <div className="flex">
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Exit Transaction</h2>
        <div className="italic mb-8">sender agent</div>
        <form className="" onSubmit={handleSubmit}>
          {/* Burn Address */}
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700" htmlFor="burn-account">Burn Address</label>
            <InputBurnAccount burnAccounts={burnAccounts} setAddress={setBurnAddress} />
          </div>
          {/* Hash */}
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700" htmlFor="hash-pair">Hash Pair</label>
            <InputHash hashPairs={hashPairs} setHash={setHash} />
          </div>
          {/* period End Seconds */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
              Period End Seconds
            </label >
            <InputText setItem={setPeriodEndSeconds}/>
          </div>
          {/* tokenAddress */}
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700" htmlFor="token-account">Token Address</label>
            <InputContract contracts={contracts} setAddress={setTokenAddress}/>
          </div>
          {/* Amount */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
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
              placeholder="0x0"
              id="amount"
              name="amount"
              defaultValue="1"
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
      </div>
      <TransactionIds />
    </div>
  )
}
