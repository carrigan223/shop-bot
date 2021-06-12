import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  background-color: black;
  color: white;
  justify-content: space-between;
  box-shadow: 2px 2px 20px lightgreen;
`;

const LinkList = styled.div`
  display: flex;
  height: 13vh;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 0px 25px;
  color: white;
  font-weight: bold;
  font-size: 2rem;

  :hover {
    color: lightgreen;
  }
`;

const Title = styled.h1`
  padding: 10px 10px;
  margin-left: 10px;
  color: lightgreen;
  border: 1px solid white;
  box-shadow: 2px 2px 20px white;
`;

const Blurb = styled.span`
  font-size: 1.5rem;
  color: lightgreen;
`;
const BlurbContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <NavBar>
      <div>
        <Title>Mr.Nice Guy</Title>
      </div>
      <BlurbContainer>
        <Blurb>Your personal Assistant for getting you the goods</Blurb>
      </BlurbContainer>

      <LinkList>
        <StyledLink styles={{ textShadow: "2px 2px 20px green" }} to={"/shop"}>
          Shop
        </StyledLink>
        <StyledLink to={"/About"}>About</StyledLink>
      </LinkList>
    </NavBar>
  );
};

export default Header;
