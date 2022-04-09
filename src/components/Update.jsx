import { useState, useEffect } from "react";
import BtcInterface from '../apis/BtcInterface';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import InputContract from "./InputContract";
import InputTransactionId from "./InputTransactionId";
import InputHash from "./InputHash";
import TableLogs from "./TableLogs";

const blockchain = new BtcInterface();

export default function Update(props) {
  
  const [contracts, setContracts] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);
  const [hashSecret, setHashSecret] = useState(null);
  const [ctError1, setCtError1] = useState('');
  const [ibError1, setIbError1] = useState('');
  const [txs, setTxs] = useState([]);
  const [transactionId, setTransactionId] = useState('0x0');
  const [hash, setHash] = useState('0x0');
  const [hashPairs, setHashPairs] = useState([]);



    useEffect(() => {
      fetchContracts();
      fetchHashPairs();
      fetchTxs();
    }, []);
  
    async function fetchContracts() {
      let graphqlResult = await API.graphql({ query: queries.listContracts });
      let contract = JSON.parse(window.localStorage.getItem('contract'));
      let cl = graphqlResult.data.listContracts.items.filter(x => !x._deleted && contract.address !== x.address);
      setContracts(cl);
      setContractAddress(cl[0].address)
    }
  
    async function fetchHashPairs() {
      let graphqlResult = await API.graphql({ query: queries.listHashPairs });
      let hps = graphqlResult.data.listHashPairs.items.filter(x => !x._deleted);
      setHashPairs(hps);
    }
  
  
    async function fetchTxs() {
      let graphqlResult = await API.graphql({ query: queries.listTxs });
      let hps = graphqlResult.data.listTxs.items.filter(x => !x._deleted);
      setTxs(hps);
    }
  
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    // await blockchain.exitTransaction(contract, tokenAddress,tokenTransferAmount);
  }


  return (
    <div className="flex">
    <div className="ml-16 my-16 ">
      <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Update</h2>
      <div className="italic mb-8">sender agent</div>
      <form className="" onSubmit={handleSubmit}>
        {/* Contract Address */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="contractAddress" className="form-label inline-block mb-2 text-gray-700">
            Contract Address
          </label >
          <InputContract contracts={contracts} setAddress={setContractAddress}/>
        </div>

        {/* Transaction Id */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="transactionId" className="form-label inline-block mb-2 text-gray-700">
            Transaction Id 
          </label >
          <InputTransactionId setTransactionId={setTransactionId} txs={txs}/>
        </div>
        {/* Hash Secret */}
        <div className="mb-3 xl:w-96" >
          <label htmlFor="hashSecret" className="form-label inline-block mb-2 text-gray-700">
            Hash Secrect
          </label >
          <InputHash hashPairs={hashPairs} setHash={setHash} />
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
      </div>
      <TableLogs transactionType="update" />
      </div>
  )
}
