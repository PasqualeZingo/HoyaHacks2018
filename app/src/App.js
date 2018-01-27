import React, { Component } from 'react';
import './App.css';
import TextInput from './components/text-input/index';

class App extends Component {
  render() {
    return (
      <div>
        <TextInput
          placeholder={'Enter your thoughts...'}
        />
      </div>
    );
  }
}

export default App;
