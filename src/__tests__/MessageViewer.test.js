import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import EmailContext from '../EmailContext';
import UserContext from '../UserContext';
import MessageList from '../MessageList';
const emails = [...new Array(5)].map((_, i) => ({
  id: i,
  subject: 'Hi m8!',
  body: 'Whats going on eh?'
}))

test('Should display a loading screen when emails is loading', () => {
  const { container } = render(
    <UserContext.Provider value={{currentUser: {}}}>
      <EmailContext.Provider value={{
        emails: [],
        loading: true,
        handleSelectEmail: function() {}
      }}>
        <MessageList />
      </EmailContext.Provider>
    </UserContext.Provider>
  );

  expect(
    container.querySelector('.no-messages').textContent
  ).toEqual('Loading..')
})

test('Should display that the mailbox is empty when no user has no emails', () => {
  const { container } = render(
    <UserContext.Provider value={{currentUser: {}}}>
      <EmailContext.Provider value={{
        emails: [],
        loading: false,
        handleSelectEmail: function() {}
      }}>
        <MessageList />
      </EmailContext.Provider>
    </UserContext.Provider>
  );

  expect(
    container.querySelector('.no-messages').textContent.indexOf('Your mailbox is empty') > -1
  ).toBe(true)
})

test('Should display that the mailbox is empty when no user has no emails', () => {
  const { container, debug } = render(
    <UserContext.Provider value={{currentUser: {}}}>
      <EmailContext.Provider value={{
        emails: emails,
        loading: false,
        handleSelectEmail: function() {}
      }}>
        <MessageList />
      </EmailContext.Provider>
    </UserContext.Provider>
  );
  
  // Print DOM tree to the console
  // debug();
  
  expect(
    container.querySelectorAll('.MessageList ul > li').length
  ).toBe(emails.length)
})