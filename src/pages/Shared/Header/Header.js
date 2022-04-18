import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../../firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
    <div>
       <Navbar  collapseOnSelect expand="lg" bg="primary" className='navbar' variant="dark">
         <Container>
            <Navbar.Brand className='nav-header' as={Link}  to="/">Bien Health</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Clinic</Nav.Link>
                <Nav.Link href="#features">Doctors</Nav.Link>
                <Nav.Link href="#pricing">Service</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                
                </Nav>
                <Nav>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                {user? 
                   <Nav.Link eventKey={2} onClick={handleSignOut} >Sign out</Nav.Link>
                
                   :
                   <Nav.Link eventKey={2} as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
     </Navbar>
    </div>
    );
};

export default Header;