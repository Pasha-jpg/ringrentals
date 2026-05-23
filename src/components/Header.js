import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';  
import './Header.css';
function Header() {
  return (
    <div id="wrapper">
      {/* BEGIN HEADER */}
      <header id="header">
        <div id="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul id="top-buttons">
                  <li>
                    <a href="#">
                      <i className="fa fa-sign-in"></i> Login
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pencil-square-o"></i> Register
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <div className="language-switcher">
                      <span>
                        <i className="fa fa-globe"></i> English
                      </span>
                      <ul>
                        <li>
                          <a href="#">Deutsch</a>
                        </li>
                        <li>
                          <a href="#">Español</a>
                        </li>
                        <li>
                          <a href="#">Français</a>
                        </li>
                        <li>
                          <a href="#">Português</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="nav-section">
         <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Link to="/" className="nav-logo">
                  <img src={logo} alt="One Ring Rentals" />
                </Link>
                {/* BEGIN SEARCH */}
                <div id="sb-search" className="sb-search">
                  <form>
                    <input
                      className="sb-search-input"
                      placeholder="Search..."
                      type="text"
                      defaultValue=""
                      name="search"
                      id="search"
                    />
                    <input
                      className="sb-search-submit"
                      type="submit"
                      value=""
                    />
                    <i className="fa fa-search sb-icon-search"></i>
                  </form>
                </div>
                {/* END SEARCH */}

                {/* BEGIN MAIN MENU */}
                <nav className="navbar">
                  <button id="nav-mobile-btn">
                    <i className="fa fa-bars"></i>
                  </button>

                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/">Find a Rental</Link>
                    </li>
                    <li>
                      <Link to="/list-rental">List your rental</Link>
                    </li>
                    <li>
                      <Link to="/travel-guides">Travel Guides</Link>
                    </li>
                    <li>
                      <Link to="/regions">Regions</Link>
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                {/* END MAIN MENU */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* END HEADER */}
    </div>
  );
}

export default Header;
