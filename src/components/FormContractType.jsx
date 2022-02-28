import React from 'react'

export default function FormContractType() {
  return (
  <div className="mb-3 xl:w-96">
    <label  className="form-label inline-block mb-2 text-gray-700" htmlFor="contract-type">Contract Type</label>
    <select id='contract-type' name='contract-type' className="form-select appearance-none
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value="none">--</option>
        <option value="BTC">Burn to Claim</option>
        <option value="ERC20">ERC20</option>
    </select>
  </div>
  )
}
