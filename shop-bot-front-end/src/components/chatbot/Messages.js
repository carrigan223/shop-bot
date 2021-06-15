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
  border-radius: 15px 50px 30px 5px;
  margin-left: 3%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  width: 70%;
  height: 15px;
  box-shadow: 12px 2px 20px lightgreen;
`;
const UserSpeech = styled.div`
  flex: 1;
  border: 2px solid black;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 3%;
  border-radius: 50px 15px 5px 30px;
  padding: 20px;
  width: 70%;
  height: 15px;
  box-shadow: -12px 2px 20px grey;
`;

const Messages = (props) => {
  console.log(props);
  return (
    <Grid>
      {props.speaks === "bot" && <BotSpeech>{props.text}</BotSpeech>}
      {props.speaks === "me" && <UserSpeech>{props.text}</UserSpeech>}
    </Grid>
  );
};

export default Messages;
