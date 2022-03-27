import { getContractAddress } from "ethers/lib/utils";
import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const blockchain = new Blockchain();

export default function ExitTransaction(props) {

  const [contracts, setContracts] = useState(null);
  const [burnAddress, setBurnAddress] = useState('0x0');
  const [hash, setHash] = useState('0x0');
  const [periodEndSeconds, setPeriodEndSeconds] = useState('0x0');
  const [tokenAddress, setTokenAddress] = useState('0x0');
  const [amount, setAmount] = useState('1');
  

  const [ctError1, setCtError1] = useState('');
  const [ibError1, setIbError1] = useState('');

  useEffect(() => {

    async function fetchData() {
      let graphqlResult = await API.graphql({ query: queries.listContracts });
      let contract = JSON.parse(window.localStorage.getItem('contract'));
      let cl = graphqlResult.data.listContracts.items.filter(x => !x._deleted && contract.address !== x.address);
      setContracts(cl);
      setTokenAddress(cl[0].address)
    }
    
    fetchData();
   }, []);
 


  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    // await blockchain.exitTransaction(contract, tokenAddress,tokenTransferAmount);
  }

  const handleContractChange = async (e) => {
    setTokenAddress(e.target.value);
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
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Exit Transaction</h2>
      <form className="" onSubmit={handleSubmit}>
        {/* Burn Address */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
            Burn Address
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
            id="burnAddress"
            name="burnAddress"
            defaultValue="0x0"
            onChange={e => setBurnAddress(e.target.value)}
          />
        </div>

        {/* Hash */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
            Hash
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
            id="hash"
            name="hash"
            defaultValue="0x0"
            onChange={e => setHash(e.target.value)}
          />
        </div>

        {/* period End Seconds */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
            Period End Seconds
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
            placeholder="120"
            id="periodEndSeconds"
            name="periodEndSeconds"
            defaultValue="120"
            onChange={e => setPeriodEndSeconds(e.target.value)}
          />
        </div>


        {/* tokenAddress */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
            Token Address
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
            id="tokenAddress"
            name="tokenAddress"
            defaultValue="0x0"
            onChange={e => setTokenAddress(e.target.value)}
          />
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
  )
}
