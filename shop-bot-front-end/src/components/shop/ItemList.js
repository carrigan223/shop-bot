import React from "react";
import styled from "styled-components";

const ShopText = styled.h1`
  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
  }
`;

const ItemList = () => {
  return (
    <div>
      <ShopText>Place holder for list of items</ShopText>
    </div>
  );
};

export default ItemList;
