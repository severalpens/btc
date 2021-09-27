import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Infobar from './Infobar'
import RegisterContract from './RegisterContract';
import RegisterContractResults from './RegisterContractResults';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Infobar></Infobar>
      <RegisterContract></RegisterContract>
      <RegisterContractResults></RegisterContractResults>
      <Footer></Footer>
    </div>
  );
}

export default App;
