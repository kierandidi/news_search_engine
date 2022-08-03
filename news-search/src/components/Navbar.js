import React from 'react';

import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarExpand() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>NewsSearch N-GIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/'>About</Nav.Link>
            <NavDropdown title="Topics" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/global-warming'>Global Warming</NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to='/bitcoin'>
                Bitcoin
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/abortion'>Abortion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/inflation'>
                Inflation
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarExpand ;