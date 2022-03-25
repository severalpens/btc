import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import TableOuter from './components/TableOuter';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import NoMetamask from './NoMetamask';
import './index.scss';
import NewContractForm1 from './components/NewContractForm1';
import Approve from './components/Approve';
import RegisterToken from './components/RegisterToken';
import Transfer from './components/TransferToContract';
import ExitTransaction from './components/ExitTransaction';
import Reclaim from './components/Reclaim';
import Update from './components/Update';
import Add from './components/Add';
import EntryTransaction from './components/EntryTransaction';
import Initialize from './components/Initialize';
import TransactionsMenu from './components/TransactionsMenu';

Amplify.configure(awsExports);

const rootElement = document.getElementById('root');

if (typeof window.ethereum !== 'undefined') {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="contracts" element={<TableOuter />} />
          <Route path="deploy" element={<NewContractForm1 />} />
          <Route path="initialize" element={<Initialize />} />
          <Route path="initialize/transfer" element={<Transfer />} />
          <Route path="initialize/register" element={<RegisterToken />} />
          <Route path="transactions" element={<TransactionsMenu />} />
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
    </BrowserRouter>,
    rootElement
  );
}
else {
  ReactDOM.render(
    <NoMetamask />,
    document.getElementById('root')
  );

}

