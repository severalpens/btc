import { Outlet } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar2';
import './App.scss';
import React, {useState} from 'react';

function App() {
  const [currentContract, setCurrentContract] = React.useState(0);
  return (
    <>
      <Navbar currentContract={currentContract} />
      <Outlet context={[currentContract, setCurrentContract]}/>
    </>
  )
}


export default withAuthenticator(App);

