import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.scss';


function App() {
  let network = 'Please use either Rinkeby or Ropsten only.';
  if (window.ethereum.networkVersion == 3) network = 'ropsten';
  if (window.ethereum.networkVersion == 4) network = 'rinkeby';

  let selectedAddress = window.ethereum.selectedAddress;

  const [accounts, setAccounts] = useState(null);


  useEffect(() => {
    async function fetchData() {
      let userAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (!accounts) {
        setAccounts(userAccounts);
      }
    }
    fetchData();
  }, [accounts])


  return (
    <div>
      <AmplifySignOut />
      <h1><Link to="/">Burn To Claim 2022</Link></h1>
      <div>Network: {network}</div>
      <div>Account: {selectedAddress}</div>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/contracts">Contracts</Link>  |{' '}
        <Link to="/registerContract">Register Contract</Link>  |{' '}
        <Link to="/seed">Seed</Link>  |{' '}
        <Link to="/approve">Approve</Link>  |{' '}
        <Link to="/transferEth">Transfer Eth</Link>  |{' '}
        <Link to="/exitTransaction">Exit Transaction</Link>  |{' '}
      </nav>
      <Outlet />
    </div>
  );
}

export default withAuthenticator(App);