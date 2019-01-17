import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';
import UserContext from './UserContext';

class Root extends React.Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    const { currentUser } = this.state;
    const { handleLogin, handleLogout } = this;
    return (
      // Context providers takes a value prop that is
      // available to consumers down the component tree
      currentUser ? (
        <UserContext.Provider
          value={{
            currentUser,
            onLogout: handleLogout,
            onLogin: handleLogin
          }}
        >
          <MainPage />
        </UserContext.Provider>
      ) : (
        <UserContext.Provider
          value={{
            currentUser,
            onLogout: handleLogout,
            onLogin: handleLogin
          }}
        >
          <LoginPage onLogin={handleLogin}/>
        </UserContext.Provider>
      )
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
