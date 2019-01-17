import React from 'react';

const { Provider, Consumer } = React.createContext(); 

class NotificationProvider extends React.Component {
  state = {
    messages: []
  };
  
  addMessage = (message) => {
    this.setState(state => ({
      messages: [
        ...state.messages,
        {
          id: Math.random(),
          text: message,
          addedAt: new Date().getTime()
        }
      ]
    }))
  }

  removeMessage(message) {
    this.setState(state => ({
      messages: state.messages.filter(m => message.id !== m.id)
    }))
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        notify: this.addMessage
      }}>
        <div className="notification-wrapper">
          <ul>
            {this.state.messages.map(message => (
              <Notification message={message} key={message.id} onClose={() => this.removeMessage(message)}></Notification>
            ))}
          </ul>
            {this.props.children}
        </div>
      </Provider>
    )
  }
}

const Notification = ({message, onClose}) => (
  <li>
    {message.text}
    <button className="close" onClick={onClose}>
      &times;
    </button>
  </li>
);

function withNotifier(Component) {
  return function Notified(props) {
    return (
      <Consumer>
        {({notify}) => (
          <Component {...props} notify={notify} />
        )}
      </Consumer>
    )
  }
}

export { withNotifier, NotificationProvider, Consumer as NotificationConsumer }
export default Consumer;