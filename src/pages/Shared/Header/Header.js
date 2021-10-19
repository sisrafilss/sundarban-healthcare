import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar ollapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className="logo-text">Sundarban</span> Healthcare </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-items-container">
                            <Nav.Link as={Link} className="nav-item" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="nav-item" to="/about">About</Nav.Link>
                            <Nav.Link as={Link} className="nav-item" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="nav-item" to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} className="nav-item" to="/login">Login</Nav.Link>
                        </Nav>
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