import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';
import {UserProvider, UserConsumer} from './UserContext';


const Root = () => (
  <UserProvider>
    <UserConsumer>
      {({currentUser}) => currentUser ? <MainPage /> : <LoginPage />}
    </UserConsumer>
  </UserProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
