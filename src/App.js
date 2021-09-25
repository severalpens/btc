import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import Transactions from './Transactions'
import Send from './Send'
import Infobar from './Infobar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Infobar></Infobar>
<Send></Send>
      <Footer></Footer>
    </div>
  );
}

export default App;
