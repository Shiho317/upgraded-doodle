import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link as Scroll } from "react-scroll";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import {
  Address,
  Greeting,
  LocationCont,
  LocationImg,
  LocationsDetails,
} from "./Locations.style";
import infoFull from "../../img/info_full_2x.jpg";

const Locations = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocationCont id="locations">
        <Fade duration={4000} triggerOnce>
          <LocationImg>
            <img src={infoFull} alt="info" />
          </LocationImg>
          <h3>Locations</h3>
          <LocationsDetails>
            <Address>
              <p>558-0053</p>
              <p>大阪市住吉区帝塚山中1-1-16</p>
              <p>阪堺電車 姫松駅すぐ</p>
              <p>南海高野線 帝塚山駅 徒歩8分</p>
              <p>Osaka Metro 西田辺駅 徒歩15分</p>
              <p>近隣コインパーキング有り</p>
            </Address>
            <Greeting>
              <p>
                We value sustainability, community and quality experiences. We
                invite you to be a part of it all with us and thank you for your
                on going support.
              </p>
              <ul>
                <li>
                  <Scroll
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={1500}
                  >
                    About Us
                  </Scroll>
                </li>
                <li>
                  <Scroll to="menu" spy={true} smooth={true} duration={1500}>
                    Menu
                  </Scroll>
                </li>
                <li>
                  <Scroll to="shop" spy={true} smooth={true} duration={1500}>
                    Shop
                  </Scroll>
                </li>
                <li>
                  <Scroll to="top" spy={true} smooth={true} duration={1500}>
                    Top
                  </Scroll>
                </li>
                <li>
                  <Scroll to="shop" spy={true} smooth={true} duration={1500}>
                    Online Shop
                  </Scroll>
                </li>
                <li>Instagram</li>
                <li>Map</li>
              </ul>
            </Greeting>
          </LocationsDetails>
        </Fade>
      </LocationCont>
    </ThemeProvider>
  );
};

export default Locations;
