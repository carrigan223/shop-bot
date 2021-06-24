import React, { Component } from "react";
import axios from "axios/index";
import Message from "./Messages";
import Card from "./Cards/card";
import QuickReplies from "./quickReplies/quickReplies";
import {
  TextInput,
  ChatbotHeader,
  ChatbotInterface,
  ChatbotContainer,
  ShowButton,
  CardRow,
  ShowButtonContainer,
  ShowChatContainer,
  CloseButton,
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
    this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      //array of messages to be displayed
      messages: [],
      showBot: false,
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

  //this async method is calling dialogflow using axios
  //we are taking the user input query and sending to
  //to the server which will handle dialogflow communications
  //upon receiving our response the messages are then caught in state
  //`messages` which are then mapped over and redered
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
      const botSays = {
        speaks: "bot",
        msg,
      };
      //this promise resolution is causing a 2sec delay befor setting the
      //new messages to state
      await this.setDelay(2);
      this.setState({ messages: [...this.state.messages, botSays] });
    }
  }

  //some theory for the above method but this method
  //will be handling our event queries as opposed to text
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
        msg,
      };
      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  //on initial render will send the welcome event to dialogflow
  componentDidMount() {
    this.df_event_query("welcome");
  }

  //setDelay is a fuction to give chatbot delay
  //the parameter passed to it will then delay
  //the response by `x` number of seconds
  setDelay(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x * 1000);
    });
  }

  //setting the scroll to newest message
  componentDidUpdate() {
    if (this.state.showBot) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      this.talkInput.focus();
    }
  }

  //method for showing the chat bot on click
  show() {
    this.setState({ showBot: true });
  }

  //method for hiding the chatbot on click
  hide() {
    this.setState({ showBot: false });
  }

  //this method takes care of our quickreply payloads
  //using a switch statement to account for various
  //quick reply situations
  _handleQuickReplyPayload(event, payload, text) {
    event.preventDefault();
    event.stopPropagation();

    switch (payload) {
      case "recomend_yes":
        this.df_event_query("SHOW_RECOMENDED");
        break;
      case "delivery_yes":
        this.df_event_query("DELIVERY");
        break;
      default:
        this.df_text_query(text);
        break;
    }
  }

  //this render is taking care of the product cards
  renderCards(cards) {
    return cards.map((card, i) => <Card key={i} payload={card.structValue} />);
  }

  //renderOne message is taking in the message then determining if
  //it is text, event, or quick reply and returning a component
  //based on the case
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
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.fields &&
      message.msg.payload.fields.quick_replies
    ) {
      return (
        <QuickReplies
          text={
            message.msg.payload.fields.tet
              ? message.msg.payload.fields.text
              : null
          }
          key={i}
          replyClick={this._handleQuickReplyPayload}
          speaks={message.speaks}
          payload={message.msg.payload.fields.quick_replies.listValue.values}
        />
      );
    }
  }

  //maping over our messages to format and render correctly
  renderMessages(returnedMessages) {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return this.renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  }

  //taking care of sending the query with the enter key
  _handleOnKeyPress(e) {
    if (e.key === "Enter") {
      this.df_text_query(e.target.value);

      e.target.value = "";
    }
  }

  render() {
    if (this.state.showBot) {
      return (
        <ShowChatContainer>
          <ChatbotContainer>
            <CloseButton onClick={this.hide}>X</CloseButton>
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
        </ShowChatContainer>
      );
    } else {
      return (
        <ShowButtonContainer>
          <ShowButton onClick={this.show}>Show</ShowButton>
        </ShowButtonContainer>
      );
    }
  }
}

export default Chatbot;
