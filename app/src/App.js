import React, { Component } from 'react';
import './App.css';
import InputManager from './components/input-manager/index';
import Conversation from './components/conversation/index';

class App extends Component {
  render() {
    return (
      <div>
        <Conversation />
        <InputManager />
      </div>
    );
  }
}

export default App;
