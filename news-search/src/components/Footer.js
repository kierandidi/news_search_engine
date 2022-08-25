import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from './img/athenas-delta-logo/athenas_delta_logo_transparent.png';
// import Logo2 from './img/athenas-delta-logo/athenas-logo-only.png';
import GithubLogo from './img/GitHub-Logos/GitHub_Logo.png';

// function Footer() {
//   return (
//     <Navbar bg="secondary" variant="secondary" className='rounded-top mt-5 container-sm'>
//       <Container>
//         <Navbar.Brand>
//           <Link to='/'>
//             <img width='70px' height='auto' src={Logo2} alt="Athenas Delta Logo" />
//           </Link>
//         </Navbar.Brand>
//         {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             {/* <Nav.Link as={Link} to='/'>Home</Nav.Link> */}
//             <Nav.Link as={Link} to='/'>About</Nav.Link>
//             {/* <NavDropdown title="Topics" id="collasible-nav-dropdown">
//               <NavDropdown.Item as={Link} to='/global-warming'>Global Warming</NavDropdown.Item>

//               <NavDropdown.Item as={Link} to='/bitcoin'>
//                 Bitcoin
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to='/abortion'>Abortion</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to='/inflation'>
//                 Inflation
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//           <Nav >
//             <Nav.Link href="#contact">Contact</Nav.Link>
//             {/* <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

function Footer () {
    return(
 <div className="main-footer">       
    <div className='container'>
        <div className='row'>
                <div className='shadow-lg col-lg-12 text-center py-3 mt-4 bg-light text-dark rounded-bottom rounded-5'>
                    <p className='col-lg-12'>This is a web development project as part of the 2022 <a href="https://techlabs.org/de/location/duesseldorf/" target="_blank" rel="noreferrer">Düsseldorf Techlabs</a> Summer Term.</p>
                    <p className='col-lg-12'>Please find our project code repo here: <a href="https://github.com/kierandidi/news_search_engine" target="_blank" rel="noreferrer"><img width='70px' height='auto' src={GithubLogo} alt="Github Logo"/></a></p>
                    {/* <p className='col-lg-12'>this is some text</p>
                    <p className='col-lg-12'>this is some text</p> */}
                    <div className="footer-bottom">
                        <div className="text-center">
                            &copy; {new Date().getFullYear()} - Athena Delta
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
)
}
  
export default Footer;