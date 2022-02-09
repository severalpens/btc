import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import Accounts from './routes/accounts';
import Contracts from './routes/contracts';
import RegisterContract from './routes/registerContract';
import Seed from './routes/seed';
import Approve from './routes/approve';
import ExitTransaction from './routes/exitTransaction';
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

