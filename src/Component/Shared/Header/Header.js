import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
    <div>
       <Navbar fixed='top'  collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand  href="#home">Bien Health</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Clinic</Nav.Link>
                <Nav.Link href="#features">Doctors</Nav.Link>
                <Nav.Link href="#pricing">Service</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                
                </Nav>
                <Nav>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Login
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
     </Navbar>
    </div>
    );
};

export default Header;