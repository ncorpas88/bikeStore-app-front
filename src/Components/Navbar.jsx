import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="Navbar">
      <h1>Bike Store</h1>
      <Link to="/">
      <button>Home</button>
      </Link>
      <button>Menu</button>
    </div>
  );
}

export default Navbar;
