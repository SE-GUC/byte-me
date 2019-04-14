import React, { Component } from 'react';
import './App.css';
import Cocreate from './components/Coworking/Cocreate';
import Coupdate from './components/Coworking/Coupdate';
import searchbyname from './components/Coworking/searchbyname';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Cocreate/>
        <Coupdate/>
        <searchbyname/>
      </div>
    );
  }
}

export default App;
