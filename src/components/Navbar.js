import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/todos" activeClassName="nav-link-active">
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
