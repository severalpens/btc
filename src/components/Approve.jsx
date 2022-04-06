import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import TableOuter from "./TableOuter";
import Contracts from "./Contracts";
import Logs from "./Logs";

const blockchain = new Blockchain();

export default function Approve(props) {

  const [address, setAddress] = useState('0x0');
  const [amount, setAmount] = useState('1');

  useEffect(() => {

    async function fetchData() {
    }    
    fetchData();

   }, []);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    await blockchain.approve(contract, address,amount);
  }


  return (
    <div className="flex">

    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Approve*</h2>
      <div className="italic mb-8">sender token</div>
      <form className="" onSubmit={handleSubmit}>
      <div className="mb-3 xl:w-96" >
          <label htmlFor="address" className="form-label inline-block mb-2 text-gray-700">
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
            id="address"
            name="address"
            defaultValue="0x0"
            onChange={e => setAddress(e.target.value)}
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
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
      <div className="mt-16">
        * Select a BasicToken/ERC20 token contract before running.
      </div>
    </div>
    <Logs transactionType="approve"/>
    <Contracts/>

    </div>
  )
}
