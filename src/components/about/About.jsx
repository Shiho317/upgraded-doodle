import React from "react";
import { AboutImage, AboutTitle, AboutUs } from "./About.style";
import conceptImg from "../../img/concept_full_2x.jpg";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <AboutUs id="about-us">
        <AboutTitle>
          <p>Our Concept</p>
          <h1>The Experience</h1>
        </AboutTitle>
        <AboutImage>
          <img src={conceptImg} alt="about" />
        </AboutImage>
      </AboutUs>
    </ThemeProvider>
  );
};

export default About;
