import React, { Component } from 'react';
import Message from './Message';
import MessageForm from './MessageForm';

class Messagebox extends Component {
  render() {
    return (
      <div className="Messagebox">
        <div className="infobox">
          <h2>Tiny Chat Room</h2>
        </div>
        <div className="messagesArea">
          {this.props.messages.map((message, i) => (
            <Message author={message.author} content={message.content} key={i} />
          ))}
          <MessageForm
            message={this.props.message}
            handleChangeMessage={this.props.handleChangeMessage}
            handleSubmitMessage={this.props.handleSubmitMessage}
          />
        </div>
      </div>
    );
  }
}

export default Messagebox;
