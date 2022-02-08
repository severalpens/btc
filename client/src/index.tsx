import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import Todos from './routes/todos';
import BasicToken from './routes/BasicToken';
import BasicTokens from './routes/BasicTokens';

import Amplify from "aws-amplify";
//import awsExports from "./aws-exports";

import './index.scss';
//Amplify.configure(awsExports);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="expenses" element={<Expenses />} />
      <Route path="todos" element={<Todos />} />

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

        <Route path="basictokens" element={<BasicTokens />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Basic Tokens</p>
              </main>
            }
          />
          <Route path=":basicTokenId" element={<BasicToken />} />
        </Route>
        
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