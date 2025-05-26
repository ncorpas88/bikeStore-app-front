import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Bike Store</h1>
      <Link to="/">
        <Button variant="secondary">Home</Button>
      </Link>
        <Button variant="secondary">Menu</Button>
    </div>
  );
}

export default Navbar;
