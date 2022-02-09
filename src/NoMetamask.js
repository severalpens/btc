import './App.scss';

function NoMetamask() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <div>
            <h1>
              Burn to Claim Ethereum Blockchain Value Transfer Protocol Based App
            </h1>
          </div>
          <br/>
          <div className="redalert">
            The Metamask browser extension has not been detected. 
          </div>
          <br/>
          <div className="redalert">
          Please install the <a href="https://metamask.io" target="blank"> Metamask </a>  browser extension.
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMetamask;
