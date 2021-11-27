import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" className="fondo-nav" variant="dark">
        <Container>
          <Navbar.Brand className="tamaño-logo" href="#home">
            <Link className="color-link" to="/">
              MyTinerary
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto espacio"></Nav>

            <Nav className="me-auto">
              <Nav.Link>
                <Link className="color-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="color-link" to="/Cities">
                  Cities
                </Link>
              </Nav.Link>
              <NavDropdown
                className="color-link"
                title=""
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">Sign in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sign up</NavDropdown.Item>
              </NavDropdown>
              <img
                className="icono-login"
                src={require("../assets/loging.png").default}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
