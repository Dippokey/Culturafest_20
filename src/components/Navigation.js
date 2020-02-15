import React, { Component } from 'react';
//import logo from '../Cultura20Logo3.png';
import '../App.css';

import { Navbar, Nav, Button } from 'react-bootstrap';



class Navigation extends Component {
  render() {
    return (
      <div >
        <Navbar scrolling bg='dark' expand="md" fixed="top" expand="lg">
          <Navbar.Brand href="#home"><img alt='' className="logo_size" src='' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="hello">
              <Nav.Link href="#home"><span className="fields">Home</span></Nav.Link>
              <Nav.Link href="#id_event"><span className="fields">Events</span></Nav.Link>
              <Nav.Link href="#link"><span className="fields">Sponsors</span></Nav.Link>
              <Nav.Link href="#link"><span className="fields">About Us</span></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div >
    );
  }
}

export default Navigation;
