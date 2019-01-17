import React from 'react';
import UserContext from './UserContext';

const MessageList = () => (
  <UserContext>
    {({currentUser}) => (
      <div className="MessageList">
        <div className="no-messages">
          Your mailbox is empty, {currentUser.firstName}! 🎉
        </div>
      </div>
    )}
  </UserContext>
);

export default MessageList;
