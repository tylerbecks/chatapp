import React from 'react';
import moment from 'moment';

const Message = ({author, content, timestamp, type}) => (
  <div className={`Message ${type}`}>
    <strong>{author}</strong>
    <span className="date">{moment(timestamp).format("h:mm a")}</span>
    <span className="messageBody">{content}</span>
  </div>
);

export default Message;
