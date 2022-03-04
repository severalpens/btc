import { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function Navbar(props) {

  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let userAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(userAccounts);
    }
    fetchData();
  }, [])

  return (
    <div className="container flex justify-between mx-auto  border m-4 border-black px-4">
      <div className="p-6 columns-2  flex ">
        <div className="p-6 ">
          <a className="font-bold" href="/">
            BTC
          </a>
        </div>
        <div className="p-6">
          <a className="" href="/contracts">
            Contracts
          </a>
        </div>
        <div className="p-6">
          <a className="" href="/deploy">
            Deploy
          </a>
        </div>
        <div className="p-6">
          <a className="" href="/initialize">
            Initialize
          </a>
        </div>
        <div className="p-6">
          <a className="" href="/transfer">
            Transfer
          </a>
        </div>
      </div>
      <div className="p-6 columns-2">
        <AmplifySignOut />
      </div>
    </div>
  );
}

export default withAuthenticator(Navbar);