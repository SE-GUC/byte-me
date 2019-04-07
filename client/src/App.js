import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPost from'./components/EventPost';
import VacancyPost from './components/VacancyPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
        <VacancyPost/>
      </div>
    );
  }
}

export default App;
