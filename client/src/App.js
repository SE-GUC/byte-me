import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPost from'./components/EventPost';
import CreateMember from './components/CreateMember';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
        <CreateMember/>
      </div>
    );
  }
}

export default App;
