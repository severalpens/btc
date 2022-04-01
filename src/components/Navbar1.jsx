import { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Blockchain from './Blockchain';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const [accounts, setAccounts] = useState(null);
  const [network, setNetwork] = useState(null);
  let contract = [];
  
  try{
    contract =  JSON.parse(window.localStorage.contract);
  }
  catch{}

  useEffect(() => {
    async function fetchData() {
      let userAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setNetwork(Blockchain.getNetwork(window.ethereum.chainId))
      setAccounts(userAccounts);
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="container flex justify-between mx-auto  border m-4 border-black px-4">
        <div className="p-6 columns-2  flex ">
          <div className="p-6 ">
            <NavLink className="font-bold" to="/">
              BTC
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/contracts">
              Contracts
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/deploy">
              Deploy
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/initialize">
              Initialize
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/transactions">
              Transactions
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/hashpairs">
              Hash Pairs
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/burnaccounts">
              Burn Accounts
            </NavLink>
          </div>


        </div>
        <div className="p-6 columns-2">
          <AmplifySignOut />
        </div>
      </div>
      <div className="container flex mx-auto">
        <div className="p-6">
          <a href={`https://${network}.etherscan.io/address/${window.ethereum.selectedAddress}`} target="_blank" rel="noreferrer">
            Network: {network}
          </a>
        </div>
        <div className="p-6">
          <a href={`https://${network}.etherscan.io/address/${window.ethereum.selectedAddress}`} target="_blank" rel="noreferrer">
            Account: {window.ethereum.selectedAddress}
          </a>
        </div>
        <div className="p-6">
          <a href={`https://${network}.etherscan.io/address/${contract.address}`} target="_blank" rel="noreferrer">
            Contract: {contract.name} | {contract.network} | {contract.address}
          </a>
        </div>
      </div>
    </>
       );
}

export default withAuthenticator(Navbar);