import { getContractAddress } from "ethers/lib/utils";
import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import Logs from "./Logs";
import TransactionIds from "./TransactionIds";
import HashCombobox from "./HashCombobox";
import BurnAccountCombobox from "./BurnAccountCombobox";
import ContractCombobox from "./ContractCombobox";
import TextInput from "./TextInput";

const blockchain = new Blockchain();

export default function ExitTransaction(props) {

  const [contracts, setContracts] = useState(null);
  const [burnAccounts, setBurnAccounts] = useState([]);
  const [hashPairs, setHashPairs] = useState([]);
  const [burnAddress, setBurnAddress] = useState('0x0');
  const [hash, setHash] = useState('0x0');
  const [periodEndSeconds, setPeriodEndSeconds] = useState('0x0');
  const [tokenAddress, setTokenAddress] = useState('0x0');
  const [amount, setAmount] = useState('1');


  const [ctError1, setCtError1] = useState('');
  const [ibError1, setIbError1] = useState('');

  useEffect(() => {
    fetchContracts();
    fetchBurnAccounts();
    fetchHashPairs();
  }, []);

  async function fetchContracts() {
    let graphqlResult = await API.graphql({ query: queries.listContracts });
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    let cl = graphqlResult.data.listContracts.items.filter(x => !x._deleted && contract.address !== x.address);
    setContracts(cl);
    setTokenAddress(cl[0].address)
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


  const handleBurnAccountChange = async (e) => {
    setBurnAddress(e.target.value);
  }
  const handleHashPairChange = async (e) => {
    setHash(e.target.value);
  }
  const handleTokenChange = async (e) => {
    setTokenAddress(e.target.value);
  }






  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    // await blockchain.exitTransaction(contract, tokenAddress,tokenTransferAmount);
  }



  
  const setInput = (inputName, value) => {
    switch (inputName) {
      case 'burnAddress':
        setBurnAddress(value)
        break;

      default:
        break;
    }
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
            <BurnAccountCombobox burnAccounts={burnAccounts} setAddress={setBurnAddress} />
          </div>
          {/* Hash */}
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700" htmlFor="hash-pair">Hash Pair</label>
            <HashCombobox hashPairs={hashPairs} setHash={setHash} />
          </div>
          {/* period End Seconds */}
          <div className="mb-3 xl:w-96" >
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
              Period End Seconds
            </label >
            <TextInput setItem={setPeriodEndSeconds}/>
          </div>
          {/* tokenAddress */}
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700" htmlFor="token-account">Token Address</label>
            <ContractCombobox contracts={contracts} setAddress={setTokenAddress}/>
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
