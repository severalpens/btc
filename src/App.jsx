import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar1';

import './App.scss';

const getNetwork = () => {

}

console.log('window.ethereum.chainId',window.ethereum.chainId)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function App() {

  const [network, setNetwork] = useState(null);

  useEffect(() => {
    let network = '';
    switch (window.ethereum.networkVersion) {
      case '3':
        network = 'ropsten';
        break;
      case '4':
        network =  'rinkeby';
        break;
      default:
        network =  'Please use either Rinkeby or Ropsten only.';
        break;
    }

      setNetwork(network);
      console.log(network)

  },[])

  return (
    <div>
      <Navbar network={network}></Navbar>
      <Outlet />
    </div>
  );
}

export default withAuthenticator(App);