import React, { Component } from 'react';
import Message from './Message';

class Messagebox extends Component {
  render() {
    return (
      <div className="Messagebox">
        <div className="infobox">
          <h2>Thomas</h2>
        </div>
        {this.props.messages.map(message => (
          <Message username={this.props.username} message={message.text} type={message.type}/>
        ))}
      </div>
    );
  }
}

export default Messagebox;
