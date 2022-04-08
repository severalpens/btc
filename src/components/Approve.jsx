import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import TableOuter from "./TableOuter";
import Contracts from "./Contracts";
import Logs from "./Logs";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import ContractCombobox from "./ContractCombobox";
import TextInput from './TextInput';

const blockchain = new Blockchain();

export default function Approve(props) {

  const [address, setAddress] = useState('0x0');
  const [amount, setAmount] = useState('1');
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetchData();
   }, []);
 
   async function fetchData() {
     let graphqlResult = await API.graphql({ query: queries.listContracts });
     let cl = graphqlResult.data.listContracts.items.filter(x => !x._deleted);
     console.log(cl);
     setContracts(cl);
   }
     

  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    await blockchain.approve(contract, address, amount);
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
            <ContractCombobox setAddress={setAddress} contracts={contracts}/>
          </div>
          <div className="mb-3 xl:w-96" >
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
              Amount
            </label >
            <TextInput componentId="amount" setItem={setAmount}/>
          </div>
          <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
        <div className="mt-16">
          * Select a BasicToken/ERC20 token contract before running.
        </div>
      </div>
      <Logs transactionType="approve" />

    </div>
  )
}
