import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {

    return (
      <div>
        <Link to="/">
          <img />
        </Link>
        <div className="menu-bar">
            <NavLink activeClassName="selected" className="navLink" to="/teams">Teams</NavLink>
            <NavLink activeClassName="selected" className="navLink" to="/utilities">Utilities</NavLink>
            <NavLink activeClassName="selected" className="navLink" to="/repository">Repository</NavLink>
            <NavLink activeClassName="selected" className="navLink" to="/updates">Updates</NavLink>
            <NavLink activeClassName="selected" className="navLink" to="/leadership">Leadership</NavLink>
        </div>
      </div >
    )
  }
}

export default Header;