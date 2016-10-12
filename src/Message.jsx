import React from 'react';

const Message = ({author, content, type}) => (
  <div className={`Message ${type}`}>
    <strong>{author}</strong>
    <span>{content}</span>
  </div>
);

export default Message;
