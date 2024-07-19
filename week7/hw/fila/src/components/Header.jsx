import React from 'react';
import "../assets/scss/Header.scss"
import LOGO from "../assets/img/logo.png"
import map from "../assets/img/map.svg"
import search from "../assets/img/search.svg"
import user from "../assets/img/user.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
        <img src={LOGO}></img>
        </a>
      </div>
      <nav className="navigation">
        <ul>
          
          <li>
            <a href="/women">WOMEN</a>
            </li>
          <li>
            <a href="/men">MEN</a>
            
          </li>
          <li>
            <a href="/kids">KIDS</a>
            </li>
          <li>|</li>
          <li>
            <a>TENNIS</a>
            </li>
          <li>
            <a>BRAND</a>
            </li>
        </ul>
        <ul className="submenu">
              <li><a href="/women/shoes">Shoes</a></li>
              <li><a href="/women/clothing">Clothing</a></li>
              <li><a href="/women/accessories">Accessories</a></li>
            </ul>
      </nav>
      <div className="category">
        <ul>
            <li><img src={map}></img></li>
            <li><img src={search}></img></li>
            <li><img src={user}></img></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
