import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { EmailConsumer } from './EmailContext';
import MessageViewer from './MessageViewer';
const MainPage = () => (
  <EmailConsumer>
    {({currentEmail, handleSelectEmail}) => (
      <main>
        <Header/>
        {currentEmail ? <MessageViewer onResetEmail={() => handleSelectEmail(null)} email={currentEmail}/> : <MessageList /> }
      </main>
    )}
  </EmailConsumer>
);

export default MainPage;
