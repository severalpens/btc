import { useState, useEffect } from "react";
import Blockchain from './Blockchain';

const blockchain = new Blockchain();

export default function RegisterContract(props) {

  useEffect(() => {
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  }

  const handleContractSelect = (e) => {
    let ct = e.target.value;
  }


  return (
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Register Contract</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700" htmlFor="contract-type">Contract</label>
          <select id='contract-type' name='contract-type' className="
            form-select 
            appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 
            focus:bg-white 
            focus:border-blue-600 
            focus:outline-none"
            aria-label="Default select example" onChange={handleContractSelect}>
            <option value="0">--</option>
            <option value="1">Burn to Claim - Default</option>
            <option value="2">Burn to Claim - New Artifact</option>
            <option value="3">ERC20 - Default</option>
            <option value="4">ERC20 - New Artifact</option>
          </select>
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
    </div>
  )
}
