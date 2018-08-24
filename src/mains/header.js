import React from 'react';
import './header.css';
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {

    return (
      <div>
        <div className="logo-wrapper">
          <Link  to="/">
            <img alt="ww-logo" className="logo" src={logo} />
          </Link>
        </div>
        <div className="menu-bar">
          <NavLink activeClassName="selected" className="navlink first-navlink" to="/teams"><span className={`text-alignment`}>Teams</span></NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/utilities"><span className={`text-alignment`}>Utilities</span></NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/connections"><span className={`text-alignment`}>Connections</span></NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/repository"><span className={`text-alignment`}>Repository</span></NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/updates"><span className={`text-alignment`}>Updates</span></NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/leadership"><span className={`text-alignment`}>Leadership</span></NavLink>
        </div>
      </div >
    )
  }
}

export default Header;