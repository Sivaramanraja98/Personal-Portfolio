import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navibar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>MERN STACK DEVELOPER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>About</Nav.Link>
            <Nav.Link href="#skills" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Skills</Nav.Link>
            <Nav.Link href="#project" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
