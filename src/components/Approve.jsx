import { getContractAddress } from "ethers/lib/utils";
import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const blockchain = new Blockchain();

export default function Approve(props) {

  const [tokenAddress, setTokenAddress] = useState('0x0');
  const [accountAddress, setAccountAddress] = useState('0x0');
  const [tokenTransferAmount, setTokenTransferAmount] = useState('1000');
  const [contracts, setContracts] = useState(null);


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
    await blockchain.registerContract(contract, tokenAddress,tokenTransferAmount);
  }

  const handleContractChange = async (e) => {
    setTokenAddress(e.target.value);
  }


  return (
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Approve</h2>
      <form className="" onSubmit={handleSubmit}>
      <div className="mb-3 xl:w-96" >
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
            Account Address
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
            id="accountAddress"
            name="accountAddress"
            defaultValue="0x0"
            onChange={e => setAccountAddress(e.target.value)}
          />
        </div>

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
            placeholder="1"
            id="initialBalance"
            name="initialBalance"
            defaultValue="1"
            onChange={e => setTokenTransferAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
    </div>
  )
}
