import React, { Component } from "react";
import axios from "axios/index";
import Message from "./Messages";
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
  async df_event_query(eventName) {
    const res = await axios.post("/api/df_event_query", { event: eventName });
    console.log("this is the res:", res);
    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  componentDidMount() {
    this.df_event_query("welcome");
  }

  renderMessages(returnedMessages) {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return (
          <Message
            key={i}
            speaks={message.speaks}
            text={message.msg.text.text}
          />
        );
      });
    } else {
      return null;
    }
  }

  render() {
    console.log(
      this.state.messages.length > 0
        ? this.state.messages[0].msg.text.text
        : null
    );
    return (
      <ChatbotContainer>
        <ChatbotHeader>Mr. Nice Guy</ChatbotHeader>
        <ChatbotInterface>
          {this.renderMessages(this.state.messages)}
        </ChatbotInterface>
        <TextInput type="text" placeholder="Say something..." />
      </ChatbotContainer>
    );
  }
}

export default Chatbot;
