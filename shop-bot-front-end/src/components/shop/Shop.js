import React from "react";
import ItemList from "./ItemList";
import styled from "styled-components";

const ShopContainer = styled.div`
  border: .5px solid lightgray;
  border-radius: 10px;
  margin: 50px 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 25px grey;
  background-color: white;
`;

const Shop = () => {
  return (
    <ShopContainer>
      <h1>Shop</h1>
      <ItemList />
    </ShopContainer>
  );
};

export default Shop;
