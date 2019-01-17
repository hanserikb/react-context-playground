import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';
import {UserProvider, UserConsumer} from './UserContext';
import {EmailProvider, EmailConsumer} from './EmailContext';


const Root = () => (
  <UserProvider>
    <EmailProvider>
      <UserConsumer>
        {({currentUser}) => currentUser ? <MainPage /> : <LoginPage />}
      </UserConsumer>
    </EmailProvider>
  </UserProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
