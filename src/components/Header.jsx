import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <p>Block Chain demo</p>
        <Nav>
          <Link to="user">
	          <NavItem>
	            <NavLink href="user">User</NavLink>
	          </NavItem>
          </Link>
          <Link to="miner">
          <NavItem>
            <NavLink href="miner">Miner</NavLink>
          </NavItem>
          </Link>
          <Link to="CDB">
          <NavItem>
            <NavLink href="CDB">Current data base</NavLink>
          </NavItem>
          </Link>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}