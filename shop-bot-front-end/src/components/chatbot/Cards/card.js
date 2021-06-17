import React from "react";
import {
  Title,
  CardContainer,
  StyledImage,
  Description,
  Price,
  CardLink,
  DescriptionContainer,
} from "./cardStyles";

const Card = (props) => {
  return (
    <CardContainer>
      <StyledImage
        src={props.payload.fields.image.stringValue}
        alt="Showing The Product"
      />
      <DescriptionContainer>
        <Title>{props.payload.fields.header.stringValue}</Title>
        <Description>
          {props.payload.fields.description.stringValue}
        </Description>
        <CardLink href={props.payload.fields.link.stringValue}>
          View Product
        </CardLink>
        <Price>{props.payload.fields.price.stringValue}</Price>
      </DescriptionContainer>
    </CardContainer>
  );
};

export default Card;
