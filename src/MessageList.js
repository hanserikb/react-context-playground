import React from 'react';
import { UserConsumer} from './UserContext';
import { EmailConsumer } from './EmailContext';

const MessageList = () => (
  <UserConsumer>
    {({currentUser}) => (
      <EmailConsumer>
      {({loading, emails, handleSelectEmail}) => (
        <div className="MessageList">
        {loading ? (
          <div className="no-messages">
            Your mailbox is empty, {currentUser.firstName}! 🎉
          </div>
        ) : ''}
        {!emails.length ? (
          <div className="no-messages">
            Your mailbox is empty, {currentUser.firstName}! 🎉
          </div>
        ) : (
          <ul>
            {emails.map(email => (
              <Email id={email.id} email={email} onClick={() => handleSelectEmail(email)}></Email>
            ))}
          </ul>
        )}
        </div>
      )}
    </EmailConsumer>
  )}
  </UserConsumer>
);

const Email = ({email, onClick}) => (
  <li onClick={() => onClick(email)}>
  <div className="subject">{email.subject}</div>
  <div className="preview">{email.preview}</div>
  </li>
)
export default MessageList;
