import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import {
  Coffee,
  CoffeeImages,
  DrinkSize,
  DrinkTemp,
  MenuCont,
  MenuDetails,
  OtherMenu,
  OtherMenuDetails,
  OtherMenuTop,
} from "./Menu.style";
import batchblew from "../../img/batchbrew_2x.jpg";
import piccolo from "../../img/piccolo_2x.jpg";
import latte from "../../img/latte_2x.jpg";

const Menu = () => {
  return (
    <ThemeProvider theme={theme}>
      <MenuCont>
        <h2>Menu</h2>
        <MenuDetails>
          <CoffeeImages>
            <Coffee>
              <img src={batchblew} alt="batch blew" />
              <p>Batch Brew</p>
              <p>Regular 430 / Large 480</p>
            </Coffee>
            <Coffee>
              <img src={piccolo} alt="piccolo" />
              <p>Piccolo</p>
              <p>Regular 430</p>
            </Coffee>
            <Coffee>
              <img src={latte} alt="latte" />
              <p>Latte</p>
              <p>Regular 490 / Large 570</p>
            </Coffee>
          </CoffeeImages>
          <OtherMenu>
            <h3>Other Menu</h3>
            <OtherMenuTop>
              <h1>Flat White</h1>
              <DrinkTemp>
                <p>Hot Only</p>
              </DrinkTemp>
              <DrinkSize>
                <p>Regular 490</p>
                <p>Large 570</p>
              </DrinkSize>
            </OtherMenuTop>
            <OtherMenuDetails>
              <h1>Mocha</h1>
              <DrinkTemp>
                <p>Hot / Iced</p>
              </DrinkTemp>
              <DrinkSize>
                <p>Regular 570</p>
                <p>Large 650</p>
                <p>Iced 570</p>
              </DrinkSize>
            </OtherMenuDetails>
            <OtherMenuDetails>
              <h1>Espresso</h1>
              <DrinkTemp>
                <p>Single / Double</p>
              </DrinkTemp>
              <DrinkSize>
                <p>Single 350</p>
                <p>Double 400</p>
              </DrinkSize>
            </OtherMenuDetails>
            <OtherMenuDetails>
              <h1>Original Cola</h1>
              <DrinkTemp>
                <p>Not Coffee</p>
              </DrinkTemp>
              <DrinkSize>
                <p>Regular 600</p>
              </DrinkSize>
            </OtherMenuDetails>
            <OtherMenuDetails>
              <h1>Babyccino</h1>
              <DrinkTemp>
                <p>Hot Only</p>
                <p>For the Kids</p>
              </DrinkTemp>
              <DrinkSize>
                <p>Regular 150</p>
              </DrinkSize>
            </OtherMenuDetails>
            <p className="add-info">Other Drink is Available.</p>
          </OtherMenu>
        </MenuDetails>
      </MenuCont>
    </ThemeProvider>
  );
};

export default Menu;
