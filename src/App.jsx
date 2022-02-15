import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import './App.scss';

const getNetwork = () => {
  switch (window.ethereum.networkVersion) {
    case '3':
      return 'ropsten';
    case '4':
      return 'rinkeby';
    default:
      return 'Please use either Rinkeby or Ropsten only.';
  }
}



function App() {


  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let userAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(userAccounts);
        console.log(userAccounts)
    }
    fetchData();
  }, [])


  
  return (
    <div>
      <AmplifySignOut />
      <h1><Link to="/">Burn To Claim 2022</Link></h1>
      <div>Network: {getNetwork()}</div>
      <div>Account: {window.ethereum.selectedAddress}</div>
      <nav className="p-6 max-w-sm mx-auto">
        <Link to="/contracts">Contracts</Link>  |{' '}
      </nav>
      <Outlet />
      <div>
       Source code: <a href="https://github.com/severalpens/btc">github.com/severalpens/btc</a>
      </div>
    </div>
  );
}

export default withAuthenticator(App);