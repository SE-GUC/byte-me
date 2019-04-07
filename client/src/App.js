import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPost from'./components/EventPost';
import VacancyPut from'./components/VacancyPut';
import VacancyPost from './components/VacancyPost'
class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
        <VacancyPost/>
        <VacancyPut/>
      </div>
    );
  }
}

export default App;
