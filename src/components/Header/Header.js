import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/bus-tour.svg';
import './Header.css';
const Header = () => {
    const {user,logOut}= useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/home"> <img src={logo} alt="" className="title-logo" /> 
        <span className="brand-1st">Tourism</span> <span className="brand-2nd">World</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#package"  >Packages</Nav.Link>
            { user.email && <Nav.Link as={Link} to="/myplan" >My Plan</Nav.Link> }
            { user.email &&  <Nav.Link as={Link} to="/allplan" >Manage All Plan</Nav.Link> }
            { user.email &&  <Nav.Link as={Link} to="/add" className="nav-link">Add Package</Nav.Link> }
            </Nav>
            <Nav>
            {
                user.email ? 
                <Button onClick={logOut} variant="light" className=" nav-link logout-btn">Logout <i className="fas fa-sign-out-alt"></i> </Button> :
                <Nav.Link as={Link} to="/login" className="login-btn">Sign-In <i className="fas fa-sign-in-alt"></i> </Nav.Link>
            }
            </Nav>
            <Nav.Link >{user?.displayName}
            </Nav.Link>
            {
                 user.photoURL && <img className="nav-img" src={user.photoURL} alt="" />
            }
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;