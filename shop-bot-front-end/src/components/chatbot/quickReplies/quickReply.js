import React from "react";
import styled from "styled-components";

const LinkReply = styled.a`
  color: black;
  text-decoration: none;
`;

const ReplyContainer = styled.div`
  background-color: white;
  font-size: 1.15rem;
  padding: 5px;
  border-radius: 33px;
  border: 2px solid lightgreen;
  box-shadow: 2px 2px 20px lightgreen;
  margin: 10px 0px;

  :hover {
    cursor: pointer;
  }
`;

const PayloadButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.15rem;
  :hover {
    cursor: pointer;
  }
`;

const QuickReply = (props) => {
  //checking if quickreply returns payload or link
  //if payload is true return top
  if (props.reply.structValue.fields.payload) {
    return (
      <ReplyContainer>
        <PayloadButton
          href="/"
          onClick={(event) =>
            props.click(
              event,
              props.reply.structValue.fields.payload.stringValue,
              props.reply.structValue.fields.text.stringValue
            )
          }
        >
          {props.reply.structValue.fields.text.stringValue}
        </PayloadButton>
      </ReplyContainer>
    );
  } else {
    return (
      <ReplyContainer>
        <LinkReply href={props.reply.structValue.fields.link.stringValue}>
          {props.reply.structValue.fields.text.stringValue}
        </LinkReply>
      </ReplyContainer>
    );
  }
};

export default QuickReply;
