import React from "react";
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
      <LocationCont>
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
              <li>About Us</li>
              <li>Menu</li>
              <li>Shop</li>
              <li>Top</li>
              <li>Online Shop</li>
              <li>Instagram</li>
              <li>Map</li>
            </ul>
          </Greeting>
        </LocationsDetails>
      </LocationCont>
    </ThemeProvider>
  );
};

export default Locations;
