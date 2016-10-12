import React from 'react';

const MessageForm = ({user, message, handleChangeMessage, handleSubmitMessage}) => (
  <div className="MessageForm">
    <form onSubmit={handleSubmitMessage}>
      <input
        className="messagefield"
        type="text"
        name="message"
        value={message}
        onChange={handleChangeMessage}
      ></input>
      <input className="messagesubmit" type="submit" value="Send"></input>
    </form>
  </div>
);

export default MessageForm;
