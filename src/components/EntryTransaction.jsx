import { getContractAddress } from "ethers/lib/utils";
import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const blockchain = new Blockchain();

export default function EntryTransaction(props) {

  const [contractAddress, setContractAddress] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [hashSecret, setHashSecret] = useState(null);
  const [ctError1, setCtError1] = useState('');
  const [ibError1, setIbError1] = useState('');

  useEffect(() => {

    async function fetchData() {
    }
    
    fetchData();
   }, []);
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    // await blockchain.exitTransaction(contract, tokenAddress,tokenTransferAmount);
  }


  return (
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Reclaim Transaction</h2>
      <form className="" onSubmit={handleSubmit}>
        {/* Contract Address */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="contractAddress" className="form-label inline-block mb-2 text-gray-700">
            Contract Address
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
            id="contractAddress"
            name="contractAddress"
            defaultValue="0x0"
            onChange={e => setContractAddress(e.target.value)}
          />
        </div>

        {/* Transaction Id */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="transactionId" className="form-label inline-block mb-2 text-gray-700">
            Transaction Id 
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
            id="transactionId"
            name="transactionId"
            defaultValue="0x0"
            onChange={e => setTransactionId(e.target.value)}
          />
        </div>



        {/* Hash Secret */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="hashSecret" className="form-label inline-block mb-2 text-gray-700">
            Hash Secrect 
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
            id="hashSecret"
            name="hashSecret"
            defaultValue="0x0"
            onChange={e => setHashSecret(e.target.value)}
          />
        </div>


        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
    </div>
  )
}
