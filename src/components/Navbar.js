import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

const Navibar = () => {
  return (
    <Navbar expand="lg" className="fixed-top nav" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand className="header" href="#about">
          MERN STACK DEVELOPER
        </Navbar.Brand>
        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto left">
            <Nav.Link href="#about">
              <b className="nank">About</b>
            </Nav.Link>
            <Nav.Link href="#skills">
              <b className="nank">Skills</b>
            </Nav.Link>
            <Nav.Link href="#project">
              <b className="nank">Projects</b>
            </Nav.Link>
            <Nav.Link href="#contact">
              <b className="nank">Contact</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
