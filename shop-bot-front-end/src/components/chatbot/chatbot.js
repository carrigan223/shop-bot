import React, { Component } from "react";
import axios from "axios/index";
import Message from "./Messages";
import Card from "./Cards/card";
import {
  TextInput,
  ChatbotHeader,
  ChatbotInterface,
  ChatbotContainer,
  CardRow,
} from "./ChatbotStyles";
import Cookies from "universal-cookie";
import { v4 as uuid } from "uuid";

const cookies = new Cookies();

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

    //checking if cookie exist then if not
    //setting a cookie with name "userID" then using uuid
    //to generate a unique identifier, by seeting path with "/"
    //we are telling its available everywhere
    if (cookies.get("userID") === undefined) {
      cookies.set("userID", uuid(), { path: "/" });
    }
    console.log(cookies.get("userID"));
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
    const userID = { userID: cookies.get("userID") };
    const res = await axios.post("/api/df_text_query", {
      text: queryText,
      userID,
    });
    if (res.data.parameters.fields["number-sequence"]) {
      console.log(res.data.parameters.fields["number-sequence"].stringValue);
    }
    for (let msg of res.data.fulfillmentMessages) {
      console.log(res);
      says = {
        speaks: "bot",
        msg: msg,
      };
      console.log(says);
      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  async df_event_query(eventName) {
    const userID = { userID: cookies.get("userID") };

    const res = await axios.post("/api/df_event_query", {
      event: eventName,
      userID,
    });
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

  //setting the scroll to newest method
  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    this.talkInput.focus();
  }

  renderCards(cards) {
    return cards.map((card, i) => <Card key={i} payload={card.structValue} />);
  }

  renderOneMessage(message, i) {
    if (message.msg && message.msg.text && message.msg.text.text) {
      return (
        <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.fields &&
      message.msg.payload.fields.cards
    ) {
      return (
        <CardRow key={i}>
          {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
        </CardRow>
      );
    }
  }

  renderMessages(returnedMessages) {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return this.renderOneMessage(message, i);
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
