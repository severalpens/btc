import react from 'react';
import './App.css';
import {Component as BasicTokenComponent} from './t1_BasicToken/Component'

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { status: '' }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div>
            <div>
              <h1>
                <a href="https://github.com/severalpens/btc">Burn to Claim</a>
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <BasicTokenComponent/>
          </div>
      </div>
    );
  }
}

export default App;
