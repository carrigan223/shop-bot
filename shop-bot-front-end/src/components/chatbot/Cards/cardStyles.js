import styled from "styled-components";

const CardContainer = styled.div`
  width: min-content;
  margin-right: auto;
  margin-left: 3%;
  border: 2px solid lightgreen;
  border-radius: 10px;
  /* padding: 10px; */
  box-shadow: 2px 2px 20px lightgreen;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  width: max-content;
`;

const DescriptionContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  border-radius: 10px 10px 0 0px;
  border-bottom: 2px solid lightgreen;
  height: 150px;
  width: 150px;
`;

const CardLink = styled.a`
  color: black;
  font-family: "Lobster";
  font-size: 1.25rem;
  padding: 10px;

  :hover {
    color: lightgreen;
  }
`;

const Price = styled.span`
  padding: 10px;
  font-family: "Lobster";
`;

const Description = styled.p`
  text-align: center;
  height: 200px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h3`
  font-family: "Lobster";
  font-weight: normal;
`;

export {
  Title,
  CardContainer,
  StyledImage,
  Description,
  Price,
  CardLink,
  DescriptionContainer,
};
