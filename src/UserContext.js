import React from 'react';

let UserContext;
let { Provider, Consumer } = UserContext = React.createContext(); 

class UserProvider extends React.Component {
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
      <Provider value={{
        currentUser,
        onLogout: handleLogout,
        onLogin: handleLogin
      }}>{this.props.children}</Provider>
    )
  }
}
export { UserProvider, Consumer as UserConsumer, UserContext }
export default UserContext;