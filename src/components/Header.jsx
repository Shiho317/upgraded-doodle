import React from "react";
import { Link as Scroll } from "react-scroll";
import { ThemeProvider } from "styled-components";
import symbol from "../img/symbol.svg";
import { theme } from "../styles/Theme";
import { Menu, Nav, NavR } from "./Header.style";

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <h1>Kagome Coffee Roasers</h1>
        <NavR>
          <Menu>
            <li>
              <Scroll to="about-us" spy={true} smooth={true} duration={1500}>
                About Us
              </Scroll>
            </li>
            <li>
              {" "}
              <Scroll to="menu" spy={true} smooth={true} duration={1500}>
                Menu
              </Scroll>
            </li>
            <li>
              {" "}
              <Scroll to="shop" spy={true} smooth={true} duration={1500}>
                Shop
              </Scroll>
            </li>
            <li>
              {" "}
              <Scroll to="locations" spy={true} smooth={true} duration={1500}>
                Locations
              </Scroll>
            </li>
          </Menu>
          <img src={symbol} alt="shop-logo" />
        </NavR>
      </Nav>
    </ThemeProvider>
  );
};

export default Header;
