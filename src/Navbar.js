import Menu from './Menu';

function Navbar() {
  return (
      <div className="Navbar">
          <a href="/">Home</a>
          <Menu></Menu>
          <a href="/">About</a>
          <a href="/">Send</a>
          <a href="/">Receive</a>
          <a href="/">Transactions</a>
          
      </div>
  );
}

export default Navbar;
