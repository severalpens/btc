import { getContractAddress } from "ethers/lib/utils";
import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import ContractCombobox from "./ContractCombobox";
import TransactionIdCombobox from "./TransactionIdCombobox";
import BurnAccountCombobox from "./BurnAccountCombobox";
import HashCombobox from "./HashCombobox";
import Logs from "./Logs";

const blockchain = new Blockchain();

export default function Add(props) {

  const [contractAddress, setContractAddress] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [burnAccountAddress, setBurnAccountAddress] = useState(null);
  const [timeoutSeconds, setTimeoutSeconds] = useState(null);
  const [contracts, setContracts] = useState(null);
  const [burnAccounts, setBurnAccounts] = useState([]);
  const [hashPairs, setHashPairs] = useState([]);
  const [burnAddress, setBurnAddress] = useState('0x0');
  const [hash, setHash] = useState('0x0');
  const [periodEndSeconds, setPeriodEndSeconds] = useState('0x0');
  const [tokenAddress, setTokenAddress] = useState('0x0');
  const [amount, setAmount] = useState('1');
  const [txs, setTxs] = useState([]);
  const [address, setAddress] = useState(null);


  
  const [ctError1, setCtError1] = useState('');
  const [ibError1, setIbError1] = useState('');

    useEffect(() => {
      fetchContracts();
      fetchHashPairs();
      fetchTxs();
      fetchBurnAccounts();
    }, []);
  
    async function fetchContracts() {
      let graphqlResult = await API.graphql({ query: queries.listContracts });
      let contract = JSON.parse(window.localStorage.getItem('contract'));
      let cl = graphqlResult.data.listContracts.items.filter(x => !x._deleted && contract.address !== x.address);
      setContracts(cl);
      setContractAddress(cl[0].address)
    }
  
    async function fetchHashPairs() {
      let graphqlResult = await API.graphql({ query: queries.listHashPairs });
      let hps = graphqlResult.data.listHashPairs.items.filter(x => !x._deleted);
      setHashPairs(hps);
    }
  
   
    async function fetchBurnAccounts() {
      let graphqlResult = await API.graphql({ query: queries.listBurnAccounts });
      let hps = graphqlResult.data.listBurnAccounts.items.filter(x => !x._deleted);
      setBurnAccounts(hps);
    }

  
    async function fetchTxs() {
      let graphqlResult = await API.graphql({ query: queries.listTxs });
      let hps = graphqlResult.data.listTxs.items.filter(x => !x._deleted);
      setTxs(hps);
    }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    // await blockchain.exitTransaction(contract, tokenAddress,tokenTransferAmount);
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
          <ContractCombobox contracts={contracts} setAddress={setContractAddress}/>
        </div>

        {/* TransactionId */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="transactionId" className="form-label inline-block mb-2 text-gray-700">
            Transaction Id
          </label >
          <TransactionIdCombobox setTransactionId={setTransactionId} txs={txs}/>
          
        </div>

        {/* Burn Account Address */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="burnAccountAddress" className="form-label inline-block mb-2 text-gray-700">
            Burn Account Addresss 
          </label >
          <BurnAccountCombobox burnAccounts={burnAccounts} setAddress={setBurnAddress} />
        

        </div>

        {/* Hash */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="hash" className="form-label inline-block mb-2 text-gray-700">
            Hash 
          </label >
          <HashCombobox hashPairs={hashPairs} setHash={setHash} />
          
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
          <ContractCombobox setAddress={setAddress} contracts={contracts}/>

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
      <Logs transactionType="add" />
      </div>
  )
}
