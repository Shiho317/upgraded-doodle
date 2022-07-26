import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import { Slides, Title1, Title2, Titles, TopFooter, TopP } from "./Top.style";
import slide1 from "../../img/slide1_2x.jpg";

const Top = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopP>
        <Titles>
          <Title1>
            <p>
              Specialty
              <br /> Coffee Roastery
            </p>
          </Title1>
          <Title2>
            <p>EST.2021</p>
          </Title2>
        </Titles>
        <Slides>
          <img src={slide1} alt="coffee" />
        </Slides>
        <TopFooter>
          <p>
            We are a small batch roastery. <br /> We roast with care, keep it
            fresh, <br /> honest and handmade.
          </p>
          <button>Scroll Down</button>
        </TopFooter>
      </TopP>
    </ThemeProvider>
  );
};

export default Top;
