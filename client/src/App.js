import react from 'react';
import './App.css';
import {BasicToken} from './t1_BasicToken/BasicToken'

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
          <BasicToken/>
          </div>
      </div>
    );
  }
}

export default App;
