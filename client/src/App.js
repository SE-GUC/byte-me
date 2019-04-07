import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPost from'./components/EventPost';
import VacancyPost from './components/VacancyPost'
import CoProfile from './components/Coworking/CoProfile';
class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
        <VacancyPost/>
        <CoProfile/>
      </div>
    );
  }
}

export default App;
