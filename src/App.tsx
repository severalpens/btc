import { Outlet, Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import './App.scss';

 function App() {
  return (
    <div>
      <AmplifySignOut />
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link> |{' '}
        <Link to="/basictokens">Basic Tokens</Link> |{' '}
        <Link to="/todos">todos</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default withAuthenticator(App);