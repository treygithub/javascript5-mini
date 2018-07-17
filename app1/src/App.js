import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      myName: 'Joe'
    }
  }
  render() {
    const  { myName } = this.state
    return (
      <div className="App">
        My name is { myName }
      </div>
    );
  }
}

export default App;
