import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import {
  Header,
  Icon,
  Icons,
  ItemsWrapper,
  StoreContents,
  StoreWrapper,
} from "./Store.style";
import ItemDatas from "../utils/ec-data.json";
import Item from "./Item";
import { FaShoppingCart } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

const Store = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreWrapper>
        <Header>
          <h3>Kagome Coffee Roasters</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
            <li>News</li>
            <li>Instagram</li>
          </ul>
        </Header>
        <StoreContents>
          <ul>
            <li>Coffee Beans</li>
            <li>Drip Bags</li>
            <li>Homewares & Merchandise</li>
            <li>Others</li>
          </ul>
          <ItemsWrapper>
            {ItemDatas.items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </ItemsWrapper>
        </StoreContents>
        <Icons>
          <Icon>
            <HiSearch />
          </Icon>
          <Icon>
            <FaShoppingCart />
          </Icon>
        </Icons>
      </StoreWrapper>
    </ThemeProvider>
  );
};

export default Store;
