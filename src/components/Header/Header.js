
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut}= useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/home">Our-World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#package">Packages</Nav.Link>
            <Nav.Link as={Link} to="/myplan">My Plan</Nav.Link>
            <Nav.Link as={Link} to="/allplan">Manage All Plan</Nav.Link>
            <Nav.Link as={Link} to="/add">Add Package</Nav.Link>
            </Nav>
            <Nav>
            {
                user.email ? 
                <Button onClick={logOut} variant="light">Logout <i className="fas fa-sign-out-alt"></i> </Button> :
                <Nav.Link as={Link} to="/login">Sign-In <i className="fas fa-sign-in-alt"></i> </Nav.Link>
            }
            </Nav>
            <Nav.Link>{user?.displayName}</Nav.Link>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;