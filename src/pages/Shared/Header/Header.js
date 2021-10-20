import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" className="nav-bg" ollapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/home"> <span className="logo-text">Sundarban</span> Healthcare </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-items-container">
                            <Nav.Link as={Link} className="nav-item" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="nav-item" to="/about">About</Nav.Link>
                            <Nav.Link as={Link} className="nav-item" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="nav-item" to="/contact">Contact</Nav.Link>
                            { user.email ?  <button onClick={logOut} className="rounded-3" style={{padding: '0px 10px'}}>Logout</button> :
                            <Nav.Link as={Link} className="nav-item" to="/login">Login</Nav.Link>}
                        </Nav>

                        { user.email && <div className="mx-3">
                            <img style={{width: '40px', height: '40px', borderRadius: '50%'}} src={user?.photoURL} alt="" />
                            <span className="text-light"> {user?.displayName} </span>
                        </div>}

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;