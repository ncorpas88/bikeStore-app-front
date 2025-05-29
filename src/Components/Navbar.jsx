import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

function MyNavbar() {

  const navigate = useNavigate()
  const [search, setSearch] = useState("") 
  
  const  handleSearch = (event) => {
      navigate(`/?search=${search}`)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <NavbarBrand as={Link} to="/">
        <img src="images/logobikestore.png" alt="logistores" />
      </NavbarBrand>
      <h1>
        <span>B</span>orn <span>T</span>o <span>R</span>ide 
        <br /> <span>B</span>uilt <span>T</span>o <span>L</span>ast
      </h1>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggleBtn" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-0" >
          <Nav.Link as={Link} to="/">
            <Button variant="secondary">Home</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/companyDetailsPage">
            <Button variant="dark">Companies</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/formCreateBikePage">
            <Button variant="dark">Create Bike</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/aboutPage">
        <Button variant="dark">About</Button>
      </Nav.Link>
        </Nav>
         <Form className="d-flex align-items-center ms-auto">
        <Row className="align-items-center g-2">
          <Col xs={7}>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button onClick={handleSearch} variant="success" type="button">Search</Button>
          </Col>
        </Row>
      </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
