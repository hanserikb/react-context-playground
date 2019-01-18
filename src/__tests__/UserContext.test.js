import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import UserContext, { UserProvider } from '../UserContext';


test('Default value is undefined', () => {
  let val;

  render(
    <UserContext.Consumer>
      {value => val = value}
    </UserContext.Consumer>
  )

  expect(val).toBe(undefined)
})

test('Default user is null', () => {
  const { container } = render(
    <UserProvider>
      <UserContext.Consumer>
        {({currentUser}) => <div>{currentUser}</div>}
      </UserContext.Consumer>
    </UserProvider>
  )

  expect(container.textContent).toBe('');
})

test('login function sets the user', () => {
  const { container } = render(
    <UserProvider>
      <UserContext.Consumer>
        {({onLogin, currentUser = {}}) => (
          <div>
            <span>{currentUser && currentUser.firstName}</span>
            <button onClick={() => onLogin({
              firstName: 'Dave',
              lastName: 'Ceddia',
              username: 'dave',
              avatar:
                'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b?s=32'
          })}>Click</button>
          </div>
        )}
      </UserContext.Consumer>
    </UserProvider>
  )

  fireEvent.click(container.querySelector('button'))

  expect(
    container.querySelector('span').textContent
  ).toBe('Dave')
})