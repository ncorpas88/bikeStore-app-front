import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <div className="Navbar">
      <img src="src/images/logobikestore.png" alt="logistores" />
      <h1>Your Trusted Bike Shop</h1>
      <Link to="/">
        <Button variant="secondary">Home</Button>
      </Link>
        <Button variant="secondary">Menu</Button>
    </div>
  );
}

export default Navbar;
