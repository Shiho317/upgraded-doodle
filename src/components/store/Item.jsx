import React from "react";
import { Link } from "react-router-dom";
import { ItemWrapper } from "./Item.style";

const Item = ({ item }) => {
  return (
    <ItemWrapper>
      <Link to={`/${item.id}`}>
        <img src={item.images} alt="item" />
        <p>{item.name}</p>
        <p>￥{item.price}</p>
      </Link>
    </ItemWrapper>
  );
};

export default Item;
