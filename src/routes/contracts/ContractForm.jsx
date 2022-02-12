//TODO: Refactor this component. Split into smaller components.
import React, { useState, useEffect } from "react";
import { API } from 'aws-amplify';

import { listContracts } from '../../graphql/queries';
import { createContract } from '../../graphql/mutations';


export default class ContractForm extends React.Component {
  constructor(props){
    
    super(props);

    this.state = { symbol: '', name: '', initialBalance: '', address: '', network: '', contracts: [] };

    this.handleSymbolChange = this.handleSymbolChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleInitialBalanceChange = this.handleInitialBalanceChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getContracts();
  }

 async getContracts(){
    let contractList = await API.graphql({query: listContracts});
    console.log(contractList.data.listContracts.items[0]);
    this.setState({contracts: contractList});

  }

  handleSymbolChange(event) {
    this.setState({symbol: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleInitialBalanceChange(event) {
    this.setState({initialBalance: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handleNetworkChange(event) {
    this.setState({network: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();

    let c = {};
    c.symbol = this.state.symbol;
    c.name = this.state.name;
    c.initialBalance = this.state.initialBalance;
    c.address = this.state.address;
    c.network = this.state.network;

    const newContract = await API.graphql({ query: createContract, variables: {input: c}})

    let contractList = await API.graphql({query: listContracts});

    this.setState({contracts: contractList});
  }


  render() {
    return (
      <div>
        <div>
          {this.state.contracts[0]}
        </div>
        <div>
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>
          Symbol:
          <input type="text" value={this.state.symbol} onChange={this.handleSymbolChange} />
        </label>
        </div>
        <div>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        </div>
        <div>
        <label>
          Initial Balance:
          <input type="text" value={this.state.initialBalance} onChange={this.handleInitialBalanceChange} />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
      </div>
    );
  }


}


