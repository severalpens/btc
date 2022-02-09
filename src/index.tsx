import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Invoices from './routesArchive/invoices';
import Invoice from './routesArchive/invoice';
import TransferEth from './routes/transferEth'
import Accounts from './routesArchive/accounts';
import Contracts from './routes/contracts';
import RegisterContract from './routesArchive/registerContract';
import Seed from './routesArchive/seed';
import Approve from './routesArchive/approve';
import ExitTransaction from './routesArchive/exitTransaction';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import NoMetamask from './NoMetamask';
import './index.scss';

Amplify.configure(awsExports);

const rootElement = document.getElementById('root');

if(typeof window.ethereum !== 'undefined'){
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="invoices" element={<Invoices />}>
        <Route
          index
          element={
            <main style={{ padding: '1rem' }}>
              <p>Select an invoice</p>
            </main>
          }
        />
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>

      <Route path="transferEth" element={<TransferEth />}/>
      <Route path="accounts" element={<Accounts />}/>
      <Route path="contracts" element={<Contracts />}/>
      <Route path="registerContract" element={<RegisterContract />}/>
      <Route path="seed" element={<Seed />}/>
      <Route path="approve" element={<Approve />}/>
      <Route path="exitTransaction" element={<ExitTransaction />}/>
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
        else{
          ReactDOM.render(
              <NoMetamask />,
            document.getElementById('root')
          );
        
        }

