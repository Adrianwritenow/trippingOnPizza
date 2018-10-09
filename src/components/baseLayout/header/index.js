import React, { Component } from 'react';
import {Nav, NavDropdown, NavItem, Navbar, MenuItem} from 'react-bootstrap';
import '../../../App.css';


class Header extends Component {
  render() {
    return (
      <div className='headerContainer'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <img className='headerLogo' src='images/CHARACTER_2.png' />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Contact
              </NavItem>
              <NavItem eventKey={2} href="#">
                Merch
              </NavItem>
              <NavItem eventKey={3} href="/food">
                Food
              </NavItem>

            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#">
                Location
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
