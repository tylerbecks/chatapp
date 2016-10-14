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
        <div id="messagesArea">
          {this.props.messages.map((message, i) => {
            return <Message
              author={message.author}
              content={message.content}
              timestamp={message.timestamp}
              key={i}
            />;
          })}
        </div>
        <MessageForm
          message={this.props.message}
          handleChangeMessage={this.props.handleChangeMessage}
          handleSubmitMessage={this.props.handleSubmitMessage}
        />
      </div>
    );
  }
}

export default Messagebox;
