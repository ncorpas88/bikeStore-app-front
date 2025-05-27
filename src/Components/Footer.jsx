import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div className="Footer">
      <Link to="/aboutPage">
        <Button variant="outline-light">About</Button>
      </Link>

    </div>
  );
}

export default Footer;
