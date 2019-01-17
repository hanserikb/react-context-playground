import React from 'react';
import {fetchEmails} from './api';

const { Provider, Consumer } = React.createContext(); 

class EmailProvider extends React.Component {
  state = {
    emails: [],
    currentEmail: null,
    error: null,
    loading: false
  };
  
  handleSelectEmail = (email) => {
    this.setState({
      currentEmail: email
    })
  }
  componentDidMount() {
    this.setState({
      loading: true,
      error: null
    }, () => {
      fetchEmails()
        .then(emails => this.setState({loading: false, emails}))
        .catch(error => this.setState({loading: false, error}))
    })
  }

  render() {
    const { handleSelectEmail } = this;
    return (
      <Provider value={{
        ...this.state,
        handleSelectEmail: handleSelectEmail
      }}>
        {this.props.children}
      </Provider>
    )
  }
}
export { EmailProvider, Consumer as EmailConsumer }
export default Consumer;