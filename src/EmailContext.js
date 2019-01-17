import React from 'react';
import { fetchEmails, fetchLatestEmails } from './api';
import { withNotifier } from './NotificaitonContext';

let EmailContext;
const { Provider, Consumer } = EmailContext = React.createContext(); 

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
    });

    this.refreshInterval = setInterval(() => this.refresh(), 3000);
  }

  refresh() {
    if (!this.state.loading) {
      fetchLatestEmails()
        .then(emails => {
          if (emails.length) {
            this.setState(state => ({
              emails: state.emails.concat(emails)
            }));
            console.log(this.props)
            this.props.notify(
              `${emails.length} more emails arrived`
            )
          }
        })
    }
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
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
const Wrapped = withNotifier(EmailProvider);
export { Wrapped as EmailProvider, Consumer as EmailConsumer, EmailContext }
export default EmailContext;