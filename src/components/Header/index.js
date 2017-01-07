import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import './header.css'

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Warranty Check</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/login">
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header
