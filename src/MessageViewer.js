import React from 'react';

const MessageViewer = ({email, onResetEmail}) => (
  <div className="MessageViewer">
    <button onClick={() => onResetEmail(null)}>Back</button>
    <h2>{email.subject}</h2>
    <div>{email.body}</div>
  </div>
);

export default MessageViewer;
