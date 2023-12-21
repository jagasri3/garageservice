//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">Service Now</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/women">Car</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Bike</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/clothes">FullService</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories">FullCare</NavLink></p>
    </div>
  </div>
)

export default Header;
