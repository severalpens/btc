import { Outlet } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar1';
import './App.scss';
import React, {useState} from 'react';


import {ContractContext} from './components/ContractContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setAddress = (addr) => {
      this.setState(state => ({
        address: addr
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      address: '0x1',
      setAddress: this.setAddress,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ContractContext.Provider value={this.state}>
        <Content/>
      </ContractContext.Provider>
    );
  }
}

function Content() {
  return (
    <>
      <Navbar />
      <Outlet />

    </>
  );
}


export default withAuthenticator(App);

