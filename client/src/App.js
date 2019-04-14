import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPost from'./components/EventPost';
import VacancyPut from'./components/VacancyPut';
import VacancyPost from './components/VacancyPost'
import CoProfile from './components/Coworking/CoProfile';
import CoRegister from './components/Coworking/CoRegister';
class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
        <VacancyPost/>
        <CoProfile/>
        <CoRegister/>
        <VacancyPut/>
      </div>
    );
  }
}

export default App;
