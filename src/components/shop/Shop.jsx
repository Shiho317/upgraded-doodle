import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import { ImageTitle, ItemImages, ShopBtn, ShopCont, ShopDetails, ShopTitle } from "./Shop.style";
import bean from "../../img/bean_2x.jpg";
import roasting from "../../img/roasting_2x.jpg";

const Shop = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShopCont>
        <ShopTitle>
          <h2>Shop</h2>
          <p>
            We roast with care, keep it fresh,honest and handmade. For a few
            minutes,escape your busy day and enjoy a cup of coffee.
          </p>
        </ShopTitle>
        <ShopDetails>
          <ItemImages>
            <ImageTitle>
              <img src={bean} alt="bean" />
              <p>Wholebean</p>
            </ImageTitle>
            <ImageTitle>
              <img src={roasting} alt="roasting" />
              <p>Roasting</p>
            </ImageTitle>
          </ItemImages>
          <ShopBtn>
            <button>Online Shop</button>
            <p>
              新鮮な豆を丁寧に焙煎したスペシャルティコーヒーを、オンラインでご購入頂けます。<br/>
              少しの間、忙しい日々を忘れて美味しいコーヒーを。
            </p>
          </ShopBtn>
        </ShopDetails>
      </ShopCont>
    </ThemeProvider>
  );
};

export default Shop;
