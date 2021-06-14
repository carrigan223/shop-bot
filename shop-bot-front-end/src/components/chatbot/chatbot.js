import React, { Component } from "react";
import axios from "axios/index";
// import styled from "styled-components";
import Messages from "./Messages";
import {
  TextInput,
  ChatbotHeader,
  ChatbotInterface,
  ChatbotContainer,
} from "./ChatbotStyles";

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
          <Messages />
        </ChatbotInterface>
        <TextInput type="text" placeholder="Say something..." />
      </ChatbotContainer>
    );
  }
}

export default Chatbot;
