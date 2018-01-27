import React, { Component } from 'react';
import './App.css';
import ConversationManager from './components/conversation-manager/index';

class App extends Component {
  render() {
    return (
      <div>
        <ConversationManager />
      </div>
    );
  }
}

export default App;
