import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './img/athenas-delta-logo/athenas_delta_logo_transparent.png';
import Logo2 from './img/athenas-delta-logo/athenas-logo-only.png';

function NavbarExpand({allArticles, topics}) {
  const [over, setOver] = useState(false);
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className=' shadow'>
      <Container>
        <Navbar.Brand onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
          <Link to='/'>
            <img width='70px' height='auto' src={over ? Logo : Logo2} alt="Athenas Delta Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'><div onClick={allArticles}>Home</div></Nav.Link>
            <Nav.Link as={Link} to='/'>About</Nav.Link>
            <NavDropdown title="Topics" id="collasible-nav-dropdown">
              {topics.map(topic=> {
                return(
                  <NavDropdown.Item>
                    <div onClick={()=>(topic.setQuery())}>{topic.title}</div>
                  </NavDropdown.Item>
                )
              })}
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


export default NavbarExpand;