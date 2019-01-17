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
    return this.state.currentUser ? (
      // Context providers takes a value prop that is 
      // available to consumers down the component tree
      <UserContext.Provider value={this.state.currentUser}>
        <MainPage
          currentUser={this.state.currentUser}
          onLogout={this.handleLogout}
        />
      </UserContext.Provider>
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
