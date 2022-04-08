import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/mutations';


import BasicToken from './BasicToken';
import BurnToClaim from './BurnToClaim';
import { useNavigate } from "react-router-dom";

const blockchain = new Blockchain();
const fileReader = new FileReader();

export default function NewContractForm1(props) {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  let navigate = useNavigate();
  useEffect(() => {
  }, []);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name,
      address,
      privateKey
    };

    await API.graphql({ query: mutations.createAccount, variables: { input } });

    navigate("/accounts", { replace: true });

  }



  return (
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Add Account</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 w-96">
          <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Name</label>
          <input className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white
                    bg-clip-padding
                    border
                    border-solid
                    border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
            type="text"
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 w-96">
          <label htmlFor="address" className="form-label inline-block mb-2 text-gray-700">Address</label>
          <input className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white
                    bg-clip-padding
                    border
                    border-solid
                    border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
            type="text"
            id="address"
            name="address"
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3 w-96">
          <label htmlFor="privateKey" className="form-label inline-block mb-2 text-gray-700">Private Key</label>
          <input className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white
                    bg-clip-padding
                    border
                    border-solid
                    border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                  "
            type="text"
            id="privateKey"
            name="privateKey"
            onChange={e => setPrivateKey(e.target.value)}
          />
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>

    </div>
  )
}
