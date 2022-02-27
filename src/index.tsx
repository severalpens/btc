import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import TransferEth from './routesArchive/transferEth';
import Contracts from './components/Contracts';
import Table from './components/Table2';
import FormOuter from './components/FormOuter';
import Seed from './routesArchive/seed';
import Approve from './routesArchive/approve';
import ExitTransaction from './routesArchive/exitTransaction';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import NoMetamask from './NoMetamask';
import './index.scss';

Amplify.configure(awsExports);

const rootElement = document.getElementById('root');

if (typeof window.ethereum !== 'undefined') {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="transferEth" element={<TransferEth />} />
          <Route path="/" element={<Contracts />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="contractForm" element={<FormOuter />} />
          <Route path="seed" element={<Seed />} />
          <Route path="contractlist" element={<Table />} />
          <Route path="approve" element={<Approve />} />
          <Route path="exitTransaction" element={<ExitTransaction />} />
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

