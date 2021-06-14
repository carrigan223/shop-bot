import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  background: rgb(65, 62, 62);

  color: white;
  justify-content: space-between;
  box-shadow: 2px 2px 20px lightgreen;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinkList = styled.div`
  display: flex;
  height: 13vh;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  padding: 0px 25px;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  font-family: "Lobster";

  :hover {
    color: lightgreen;
  }
`;

const Title = styled.h1`
  padding: 10px 10px;
  margin-left: 10px;
  background-color: white;
  color: lightgreen;
  border: 2px solid black;
  border-radius: 50%;
  padding: 20px;
  box-shadow: 2px 2px 20px white;
  font-family: "Lobster";
  font-size: 2rem;
  text-decoration: underline;

  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
  }
`;

const Blurb = styled.span`
  font-size: 1.5rem;
  color: lightgreen;
  font-family: "Lobster";

  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
  }
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
