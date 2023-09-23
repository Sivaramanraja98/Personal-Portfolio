import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css'

const Navibar = () => {
  return (
    <Navbar expand="lg" className="fixed-top bg-light">
      <Container>
        <Navbar.Brand className='header' href="">MERN STACK DEVELOPER</Navbar.Brand>
        <Navbar.Toggle  className='toggler' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto left">
            <Nav.Link href='#about'><b>About</b></Nav.Link>
            <Nav.Link href='#skills'><b>Skills</b></Nav.Link>
            <Nav.Link href='#project'><b>Projects</b></Nav.Link>
            <Nav.Link href='#contact'><b>Contact</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;