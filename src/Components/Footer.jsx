import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="Footer">
      <Link to="/aboutPage">
        <button>About</button>
      </Link>

    </div>
  );
}

export default Footer;
