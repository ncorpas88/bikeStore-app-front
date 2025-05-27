import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
      <img src="src/images/logobikestore.png" alt="logistores" />
      </Link>
      <h1><span>B</span>orn <span>T</span>o <span>R</span>ide, <span>B</span>uilt <span>T</span>o <span>L</span>ast</h1>
      <Link to="/">
        <Button variant="secondary">Home</Button>
      </Link>
        <Button variant="secondary">Menu</Button>
    </div>
  );
}

export default Navbar;
