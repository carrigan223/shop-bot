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
  messagesEnd;
  talkInput;
  constructor(props) {
    super(props);

    this._handleOnKeyPress = this._handleOnKeyPress.bind(this);
    this.state = {
      //array of messages to be displayed
      messages: [],
    };
  }

  async df_text_query(queryText) {
    let says = {
      speaks: "user",
      msg: {
        text: {
          text: queryText,
        },
      },
    };
    this.setState({ messages: [...this.state.messages, says] });
    const res = await axios.post("/api/df_text_query", { text: queryText });
    for (let msg of res.data.fulfillmentMessages) {
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

  //on initial render will send the welcome event to dialogflow
  componentDidMount() {
    this.df_event_query("welcome");
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    this.talkInput.focus();
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

  _handleOnKeyPress(e) {
    if (e.key === "Enter") {
      this.df_text_query(e.target.value);
      e.target.value = "";
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
          <div
            ref={(el) => {
              this.messagesEnd = el;
            }}
            style={{ float: "left", cleat: "both" }}
          />
        </ChatbotInterface>
        <TextInput
          ref={(input) => {
            this.talkInput = input;
          }}
          type="text"
          placeholder="Say something..."
          onKeyPress={this._handleOnKeyPress}
        />
      </ChatbotContainer>
    );
  }
}

export default Chatbot;
