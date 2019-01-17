import React from 'react';
import UserMenu from './UserMenu';
import { UserConsumer } from './UserContext';

const Header = () => (
  // Context consumers expects a single function as its child component
  // This function will recieve the value passed down from the Provider component
  <UserConsumer>
    {({currentUser, onLogout}) => (
      <header className="Header">
        <h2>MyMail</h2>
        <UserMenu avatar={currentUser.avatar} onLogout={onLogout} />
      </header>
    )}
  </UserConsumer>
);

export default Header;
