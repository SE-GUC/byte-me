import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPost from'./components/EventPost';
import CreateMember from './components/CreateMember';
import UpdateMember from './components/UpdateMember';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
        <CreateMember/>
        <UpdateMember/>
      </div>
    );
  }
}

export default App;
