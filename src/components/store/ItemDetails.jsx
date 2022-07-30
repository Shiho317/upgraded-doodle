import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import {
  Desc,
  DescB,
  DescWrapper,
  Details,
  ImageWrapper,
  ItemDetailsWrapper,
  TitleWrapper,
} from "./ItemDetails.style";
import itemData from "../utils/ec-data.json";
import { Icon, Icons } from "./Store.style";
import { FaShoppingCart } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

const ItemDetails = () => {
  const itemId = useParams().id;

  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    const findItem = itemData.items.filter(
      (item) => item.id === Number(itemId)
    );
    setCurrentItem(findItem);
  }, [itemId]);

  return (
    <ThemeProvider theme={theme}>
      {currentItem.length > 0 && (
        <ItemDetailsWrapper>
          <TitleWrapper>
            <h1>Kagome Coffee Roasters</h1>
          </TitleWrapper>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
            <li>News</li>
            <li>Instagram</li>
          </ul>
          <Details>
            <ImageWrapper>
              <img src={currentItem[0].images} alt="detail" />
            </ImageWrapper>
            <DescWrapper>
              <h3>{currentItem[0].name}</h3>
              <h2>￥{currentItem[0].price}</h2>
              <ul>
                <li>
                  <p>豆のまま 【Whole Beans】</p>
                  <div className="cart-btn">
                    <button>カートに入れる</button>
                  </div>
                </li>
                <li>
                  <p>中挽き ドリップコーヒー【Ground for pour over】</p>
                  <div className="cart-btn">
                    <button>カートに入れる</button>
                  </div>
                </li>
                <li>
                  <p>粗挽き フレンチプレス【Ground for french press】</p>
                  <div className="cart-btn">
                    <button>カートに入れる</button>
                  </div>
                </li>
              </ul>
              <Desc>
                <p>{currentItem[0].description}</p>
                <DescB>
                  <p>精製方法 : {currentItem[0].howto}</p>
                  <p>内容量 : {currentItem[0].amount}</p>
                  <p>保存方法 : {currentItem[0].storage}</p>
                </DescB>
              </Desc>
            </DescWrapper>
          </Details>
          <Icons>
            <Icon>
              <HiSearch />
            </Icon>
            <Icon>
              <FaShoppingCart />
            </Icon>
          </Icons>
        </ItemDetailsWrapper>
      )}
    </ThemeProvider>
  );
};

export default ItemDetails;
