import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';
import { UserProvider, UserConsumer} from './UserContext';
import { EmailProvider } from './EmailContext';
import { NotificationProvider } from './NotificaitonContext';

const Root = () => (
  <NotificationProvider>
    <UserProvider>
      <EmailProvider>
        <UserConsumer>
          {({currentUser}) => currentUser ? <MainPage /> : <LoginPage />}
        </UserConsumer>
      </EmailProvider>
    </UserProvider>
  </NotificationProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
