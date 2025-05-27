import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
      <img src="src/images/logobikestore.png" alt="logistores" />
      </Link>
      <h1><span>Y</span>our <span>T</span>rusted <span>B</span>ike <span>S</span>hop</h1>
      <Link to="/">
        <Button variant="secondary">Home</Button>
      </Link>
        <Button variant="secondary">Menu</Button>
    </div>
  );
}

export default Navbar;
