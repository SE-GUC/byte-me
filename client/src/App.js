import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPost from'./components/EventPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
      </div>
    );
  }
}

export default App;
