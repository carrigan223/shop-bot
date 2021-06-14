import React, { Component } from "react";
import axios from "axios/index";
import styled from "styled-components";
import Messages from "./Messages";

const ChatbotContainer = styled.div`
  @media (min-width: 768px) {
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    margin: 50px 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 2px 2px 25px grey;
    width: 50vw;
    margin-left: auto;
    /* overflow: scroll; */
    background-color: white;
    padding: 10px;
  }

  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
    width: 90vw;
    border: 0.5px solid lightgrey;
    margin-bottom: 30px;
  }
`;

const ChatbotInterface = styled.div`
  width: 100%;
  height: 40vh;
  overflow: scroll;
`;

const ChatbotHeader = styled.h2`
  font-family: "Lobster";
  font-size: 2rem;
  text-align: center;
  width: 100%;
`;

const TextInput = styled.input`
  border-radius: 15px 50px 30px;
  border: 2px solid black;
  padding: 20px;
  width: 75%;
  height: 15px;
  font-size: 1.25rem;
`;

class Chatbot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //array of messages to be displayed
      messages: [],
    };
  }

  async df_text_query(text) {
    let says = {
      speaks: "me",
      msg: {
        text: {
          text: text,
        },
      },
    };

    //spreading the original messages to retain the history and adding
    //the new message to the end of the array
    this.setState({ messages: [...this.state.messages, says] });
    const res = await axios.post("/api/df_text_query", { text });

    for (let msg of res.data.fullfillmentMessages) {
      says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  async df_event_query(event) {
    const res = await axios.post("api/df_event_query", { event });

    for (let msg of res.data.fullfillmentMessages) {
      let says = {
        speaks: "me",
        msg: msg,
      };

      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  render() {
    return (
      <ChatbotContainer>
        <ChatbotHeader>Mr. Nice Guy</ChatbotHeader>
        <ChatbotInterface>
          <Messages  />
        </ChatbotInterface>
        <TextInput type="text" placeholder="Say something..." />
      </ChatbotContainer>
    );
  }
}

export default Chatbot;
