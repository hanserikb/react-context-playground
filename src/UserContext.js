import React, { useState } from 'react';

let UserContext;
let { Provider, Consumer } = UserContext = React.createContext(); 

const UserProvider = React.memo(({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const handleLogin = user => setCurrentUser(user);
  const handleLogout = () => setCurrentUser(null);

  return (
    // Context providers takes a value prop that is
    // available to consumers down the component tree
    <Provider value={{
      currentUser,
      onLogout: handleLogout,
      onLogin: handleLogin
    }}>{children}</Provider>
  )
})
export { UserProvider, Consumer as UserConsumer, UserContext }
export default UserContext;