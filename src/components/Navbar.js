// Import React and required dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

// Define the Navbar functional component
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

// Export the Navbar component
export default Navbar;
