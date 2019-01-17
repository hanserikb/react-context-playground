import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import EmailContext from '../EmailContext';
import MessageViewer from '../MessageViewer';
const email = {
  subject: 'Hi m8!',
  body: 'Whats going on eh?'
};

test('view an email', () => {
  render(
    <EmailContext.Provider value={{
      currentEmail: email
    }}>
      <MessageViewer />
    </EmailContext.Provider>
  )
})