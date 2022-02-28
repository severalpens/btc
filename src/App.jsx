import { Outlet, Link } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar1';

import './App.scss';



function App() {


  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default withAuthenticator(App);