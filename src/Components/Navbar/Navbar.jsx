import React from "react";
import LogoSvg from "./LogoSvg";
import "./Navbar.css"
import styled from 'styled-components';


const List = styled.li`
  list-style: none;
  padding: 0 2.5rem;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: -0.01em;

    @media (max-width: 1024px) {
   display:none;
}

  `

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
`

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-container wrapper">
        <div className="header-content">
          <div className="header-logo_wrapper">
            <a href="/">
            <LogoSvg/>
            </a>
          </div>
          <nav id="site-navigation" className="main-navigation header-navigation">
            <div className="menu-main-menu-container">
              <ul id="menu-main-menu" className="header__menu">
                <List>
                <NavLink href="/" className="nav-link">
                Product
                </NavLink>
                </List>
                <List>
                <NavLink href="#" className="nav-link">
                  How it works
                  </NavLink>
                </List>
                <List>
                <NavLink href="" className="nav-link">
                  Features

                  </NavLink>
                </List>
                <List>
                <NavLink href="#" className="nav-link">
                  Mission
                  </NavLink>
                </List>
                <List>
                <NavLink href="#" className="nav-link">
                  Company
                  </NavLink>
                </List>
               <List className="header_btn">
                  <NavLink href="#">Login</NavLink>
                  </List>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
