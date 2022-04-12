import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import NoMetamask from './NoMetamask';
import './index.scss';
import Contracts from './components/Contracts';
import FormContract from './components/FormContract';
import Approve from './components/Approve';
import ExitTransaction from './components/ExitTransaction';
import Reclaim from './components/Reclaim';
import Update from './components/Update';
import Add from './components/Add';
import EntryTransaction from './components/EntryTransaction';
import Initialize from './components/Initialize';
import MenuTransactions from './components/MenuTransactions';
import HashPairs from './components/HashPairs';
import BurnAccounts from './components/BurnAccounts';
import HashPairNew from './components/FormHashPair';
import Accounts from './components/Accounts';
import ElementsMenu from './components/MenuElements';
import AddAccount from './components/FormAccount';
import Logs from './components/Logs';

Amplify.configure(awsExports);

const container = document.getElementById('root');
const root = createRoot(container);
if (typeof window.ethereum !== 'undefined') {
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="elements" element={<ElementsMenu />} />
        <Route path="elements/contracts" element={<Contracts />} />
        <Route path="elements/accounts" element={<Accounts/>} />
        <Route path="elements/logs" element={<Logs/>} />
        <Route path="elements/accounts/add" element={<AddAccount/>} />
          <Route path="elements/hashpairs" element={<HashPairs />} />
          <Route path="elements/burnaccounts" element={<BurnAccounts />} />
          <Route path="transactions" element={<MenuTransactions />} />
          <Route path="transactions/deploy" element={<FormContract />} />
          <Route path="transactions/initialize" element={<Initialize />} />
          <Route path="transactions/approve" element={<Approve />} />
          <Route path="transactions/exit" element={<ExitTransaction />} />
          <Route path="transactions/reclaim" element={<Reclaim />} />
          <Route path="transactions/update" element={<Update />} />
          <Route path="transactions/add" element={<Add />} />
          <Route path="transactions/entry" element={<EntryTransaction />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
else {
  root.render(
    <NoMetamask />
     );

}

