import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import { Symbol, Menu, Nav, NavR } from "./Header.style";
import { GiCoffeeBeans } from "react-icons/gi";

const Header = () => {
  const [showNav, isShowNav] = useState(true);

  useEffect(() => {
    let initY = 0;
    let newY = 0;
    const scrollFunc = () => {
      newY = window.pageYOffset;
      if (initY > newY) {
        isShowNav(true);
      } else if (initY < newY) {
        isShowNav(false);
      }
      initY = newY;
    };
    window.addEventListener("scroll", scrollFunc);
  }, []);

  const [onTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const scrollDistance = () => {
      if (window.scrollY > 400) {
        setIsOnTop(false);
      } else if (window.scrollY <= 400) {
        setIsOnTop(true);
      }
    };
    window.addEventListener("scroll", scrollDistance);
  }, []);

  const Laptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const Tablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const Mobile = useMediaQuery({
    query: "(min-width: 320px)",
  });

  return (
    <ThemeProvider theme={theme}>
      <Nav style={{ top: showNav ? 0 : "-10rem" }}>
        {Laptop ? (
          <h1 style={{ color: onTop ? "#EDECE7" : "#242E43" }}>
          Kagome Coffee Roasers
          </h1>
        ) :  (
          <h1 style={{ color: onTop ? "#EDECE7" : "#242E43" }}>
            Kagome<br/> Coffee Roasers
          </h1>
        )}

        <NavR style={{ color: onTop ? "#EDECE7" : "#242E43" }}>
          {(Laptop || Tablet) && (
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
          )}
          {Mobile && (
            <Menu>
              <li>Menu</li>
            </Menu>
          )}
          <Symbol
            style={{
              color: onTop ? "#EDECE7" : "#242E43",
              border: onTop ? "1.5px solid #EDECE7" : "1.5px solid #242E43",
            }}
          >
            <GiCoffeeBeans />
          </Symbol>
        </NavR>
      </Nav>
    </ThemeProvider>
  );
};

export default Header;
