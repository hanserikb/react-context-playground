import React, { useContext } from 'react';
import UserContext from './UserContext';
import EmailContext from './EmailContext';

const MessageList = () => {
  const { currentUser } = useContext(UserContext);
  const { loading, emails, handleSelectEmail } = useContext(EmailContext);
  return (
    <div className="MessageList">
      {loading ? (
        <div className="no-messages">
          Loading..
        </div>
      ) : ''}
      {!emails.length ? (
        <div className="no-messages">
          Your mailbox is empty, {currentUser.firstName}! 🎉
        </div>
      ) : (
        <ul>
          {emails.map(email => (
            <Email key={email.id} email={email} onClick={handleSelectEmail}></Email>
          ))}
        </ul>
      )}
    </div>
  )
};

const Email = React.memo(({email, onClick}) => (
  <li onClick={() => onClick(email)}>
  <div className="subject">{email.subject}</div>
  <div className="preview">{email.preview}</div>
  </li>
))

export default MessageList;
