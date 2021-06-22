import React, { Component } from "react";
import QuickReply from "./quickReply";
import styled from "styled-components";

const QuickReplyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
  padding: 10px 0px;
`;

class QuickReplies extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  //method for handling the click
  _handleClick(event, payload, text) {
    this.props.replyClick(event, payload, text);
  }

  //render method to render each particular quick reply
  renderQuickReply(reply, i) {
    return <QuickReply key={i} click={this._handleClick} reply={reply} />;
  }

  //render method for entire collection of quick replies
  //coming from dialog flow, mapping over and displaying options
  renderQuickReplies(quickReplies) {
    if (quickReplies) {
      return quickReplies.map((reply, i) => {
        return this.renderQuickReply(reply, i);
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div>
          <QuickReplyContainer>
            {this.props.text && <p>{this.props.text.stringValue}</p>}
            {this.renderQuickReplies(this.props.payload)}
          </QuickReplyContainer>
        </div>
      </div>
    );
  }
}

export default QuickReplies;
