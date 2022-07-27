import React from "react";
import { Fade } from "react-awesome-reveal";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import {
  ImageTitle,
  ItemImages,
  ShopBtn,
  ShopCont,
  ShopDetails,
  ShopTitle,
} from "./Shop.style";
import bean from "../../img/bean_2x.jpg";
import roasting from "../../img/roasting_2x.jpg";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <ThemeProvider theme={theme}>
      <ShopCont id="shop">
        <Fade duration={4000} triggerOnce>
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
              <Link to="/store">
                <button>Online Shop</button>
              </Link>
              <p>
                新鮮な豆を丁寧に焙煎したスペシャルティコーヒーを、オンラインでご購入頂けます。
                <br />
                少しの間、忙しい日々を忘れて美味しいコーヒーを。
              </p>
            </ShopBtn>
          </ShopDetails>
        </Fade>
      </ShopCont>
    </ThemeProvider>
  );
};

export default Shop;
