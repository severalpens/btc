import { useState } from "react";
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import { useNavigate } from "react-router-dom";
import InputText from "./InputText";


export default function FormAccount(props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  let navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name,
      address,
      privateKey
    };

    await API.graphql({ query: mutations.createAccount, variables: { input } });
    navigate("/elements/accounts", { replace: true });
  }

  return (
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Add Account</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 w-96">
          <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Name</label>
          <InputText elementId="name" setItem={setName}/>
        </div>
        <div className="mb-3 w-96">
          <label htmlFor="address" className="form-label inline-block mb-2 text-gray-700">Address</label>
          <InputText elementId="address" setItem={setAddress}/>
        </div>
        <div className="mb-3 w-96">
          <label htmlFor="privateKey" className="form-label inline-block mb-2 text-gray-700">Private Key</label>
          <InputText elementId="privateKey" setItem={setPrivateKey}/>
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
    </div>
  )
}
