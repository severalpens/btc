import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Contracts from './components/Contracts';
import FormOuter from './components/FormOuter';
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
          <Route path="contracts" element={<Contracts />} />
          <Route path="deploy" element={<FormOuter />} />
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

