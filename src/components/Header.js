import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="funky-navbar">
      <Container>
        <Navbar.Brand href="#home">MERN STACK DEVELOPER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              href="#home"
              className="funky-nav-item"
              style={{ backgroundColor: "#007bff" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="funky-nav-item"
              style={{ backgroundColor: "#ff6b6b" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="funky-nav-item"
              style={{ backgroundColor: "#5D6D7E" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="funky-nav-item"
              style={{ backgroundColor: "#F5B7B1" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="funky-nav-item"
              style={{ backgroundColor: "#55efc4" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
