import React from 'react';
import './header.css';
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import Marquee from 'react-marquee';

class Header extends React.Component {

  bannerToString = () => {

    const myBanners = Object.keys(this.props.banner);
    const banners = this.props.banner;
  
    let bannerText = myBanners.map((el) => {
      return banners[el].text
    }).join("<  =  >");

    console.log(bannerText);
    return bannerText;
  }

  render() {

    return (
      <div>
        <div className="logo-wrapper">
          <Link to="/">
            <img alt="ww-logo" className="logo" src={logo} />
          </Link>
        </div>
        <div className="banner">
          <Marquee text={this.bannerToString()} leading={80} hoverToStop={true} loop={true} className="banner-text"></Marquee>
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