import React from "react";
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
            <li>About Us</li>
            <li>Menu</li>
            <li>Shop</li>
            <li>Locations</li>
          </Menu>
          <img src={symbol} alt="shop-logo" />
        </NavR>
      </Nav>
    </ThemeProvider>
  );
};

export default Header;
