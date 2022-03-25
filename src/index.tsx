import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import TableOuter from './components/TableOuter';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import NoMetamask from './NoMetamask';
import './index.scss';
import NewContractForm1 from './components/NewContractForm1';
import InitializeMenu from './components/InitializeMenu';
import TransferMenu from './components/TransferMenu';
import Approve from './components/Approve';
import RegisterToken from './components/RegisterToken';
import Transfer from './components/TransferToContract';
import ExitTransaction from './components/ExitTransaction';
import Reclaim from './components/Reclaim';
import Update from './components/Update';
import Add from './components/Add';
import EntryTransaction from './components/EntryTransaction';
import Transactions from './components/Transactions';

Amplify.configure(awsExports);

const rootElement = document.getElementById('root');

if (typeof window.ethereum !== 'undefined') {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="contracts" element={<TableOuter />} />
          <Route path="deploy" element={<NewContractForm1 />} />
          <Route path="initialize" element={<InitializeMenu />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="initialize/transfer" element={<Transfer />} />
          <Route path="initialize/register" element={<RegisterToken />} />
          <Route path="transfer" element={<TransferMenu />} />
          <Route path="transfer/approve" element={<Approve />} />
          <Route path="transfer/exit" element={<ExitTransaction />} />
          <Route path="transfer/reclaim" element={<Reclaim />} />
          <Route path="transfer/update" element={<Update />} />
          <Route path="transfer/add" element={<Add />} />
          <Route path="transfer/entry" element={<EntryTransaction />} />
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

