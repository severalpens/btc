import { Outlet, Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import './App.scss';

 function App() {
  return (
    <div>
      <AmplifySignOut />
      <h1>Burn To Claim 2022</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/accounts">Accounts</Link>  |{' '}
        <Link to="/contracts">Contracts</Link>  |{' '}
        <Link to="/registerContract">Register Contract</Link>  |{' '}
        <Link to="/seed">Seed</Link>  |{' '}
        <Link to="/approve">Approve</Link>  |{' '}
        <Link to="/exitTransaction">Exit Transaction</Link>  |{' '}
      </nav>
      <Outlet />
    </div>
  );
}

export default withAuthenticator(App);