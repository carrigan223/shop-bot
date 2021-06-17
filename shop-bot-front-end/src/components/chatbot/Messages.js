import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BotSpeech = styled.div`
  flex: 1;
  border: 2px solid lightgreen;
  border-radius: 15px 30px 30px 0px;
  background-color: white;
  margin-left: 3%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 70%;
  height: 15px;
  box-shadow: 2px 2px 20px lightgreen;
`;
const UserSpeech = styled.div`
  flex: 1;
  border: 2px solid black;
  margin-left: auto;
  margin-top: 10px;
  background-color: white;
  margin-bottom: 10px;
  margin-right: 3%;
  border-radius: 30px 15px 0px 30px;
  padding: 10px;
  width: 70%;
  height: 15px;
  box-shadow: -12px 2px 20px grey;
`;

const Messages = (props) => {
  console.log(props);
  return (
    <Grid>
      {props.speaks === "bot" && <BotSpeech>{props.text}</BotSpeech>}
      {props.speaks === "user" && <UserSpeech>{props.text}</UserSpeech>}
    </Grid>
  );
};

export default Messages;
