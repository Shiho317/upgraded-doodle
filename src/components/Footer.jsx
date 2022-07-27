import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import { CompAddress, Contact, Copyright, FooterWrapper } from "./Footer.style";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterWrapper>
        <Contact>
          <p>Contact:</p>
          <h4>info@kagomecoffee.jp</h4>
        </Contact>
        <CompAddress>
          <p>1-1-16 Tezukayamanaka, Sumiyoshi-ku, Osaka, Japan</p>
        </CompAddress>
        <Copyright>
          <p>Copyright kagomecoffee all rights reserved 2022</p>
        </Copyright>
      </FooterWrapper>
    </ThemeProvider>
  );
};

export default Footer;
