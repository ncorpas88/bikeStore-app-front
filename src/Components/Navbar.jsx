import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand as={Link} to="/">
        <img src="src/images/logobikestore.png" alt="logistores" />
      </Navbar.Brand>
      <h1>
        <span>B</span>orn <span>T</span>o <span>R</span>ide, <span>B</span>uilt{" "}
        <span>T</span>o <span>L</span>ast
      </h1>
      <Link to="/">
        <Button variant="secondary">Home</Button>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/companyDetailsPage">
            <Button variant="dark">Companies</Button>
          </Nav.Link>
          <img src="src/images/bike.png" alt="bikelogo" />
          <Nav.Link as={Link} to="/formCreateBikePage">
            <Button variant="dark">Create Bike</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
