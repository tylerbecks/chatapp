import React from 'react';

const Message = ({username, message, type}) => (
  <div className={`Message + ${type}`}>
    <strong>{username}</strong>
    <p>{message}</p>
  </div>
);

export default Message;
