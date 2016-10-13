import React from 'react';
import moment from 'moment';
import Linkify from 'react-linkify';

const Message = ({author, content, timestamp, type}) => (
  <div className={`Message ${type}`}>
    <strong>{author}</strong>
    <span className="date">{moment(timestamp).format("h:mm a")}</span>
    <Linkify className="messageBody">{content}</Linkify>
  </div>
);

export default Message;
