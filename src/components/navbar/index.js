import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Navigation() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-custom static-top">
        <Container>
          <Navbar.Brand>
            <img src='https://via.placeholder.com/150x50?text=Logo' alt="Logo"></img>
          </Navbar.Brand>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home
                    </Nav.Link>
              </Nav.Item>
              <Router>
                <Nav.Item>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/commission">Commissions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/shop">Shop</Nav.Link>
                </Nav.Item>
              </Router>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Nav>
    )
}

export default Navigation;